package com.linkedin.openhouse.cluster.storage;

import static com.linkedin.openhouse.cluster.storage.StorageType.LOCAL;

import com.google.common.base.Preconditions;
import com.linkedin.openhouse.cluster.storage.configs.StorageProperties;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class StorageManager {

  @Autowired StorageProperties storageProperties;

  @Autowired StorageType storageType;

  @Autowired List<Storage> storagesBeans;

  @PostConstruct
  public void validateProperties() {
    String clusterYamlError = "Cluster yaml is incorrectly configured: ";
    Preconditions.checkArgument(
        !(storageProperties.getDefaultType() == null
            && storageProperties.getTypes() != null
            && !storageProperties.getTypes().isEmpty()),
        clusterYamlError + "default-type for storage is not set");
    Preconditions.checkArgument(
        !(storageProperties.getDefaultType() != null
            && (storageProperties.getTypes() == null || storageProperties.getTypes().isEmpty())),
        "no types are provided");
    try {
      Optional.ofNullable(storageProperties.getDefaultType()).ifPresent(storageType::fromString);
      Optional.ofNullable(storageProperties.getTypes())
          .map(Map::keySet)
          .ifPresent(keyset -> keyset.forEach(key -> storageType.fromString(key)));
    } catch (IllegalArgumentException e) {
      throw new IllegalArgumentException(clusterYamlError + e.getMessage());
    }
  }

  public Storage getDefaultStorage() {
    if (storageProperties.getDefaultType() == null) {
      return getStorage(LOCAL);
    }
    return getStorage(storageType.fromString(storageProperties.getDefaultType()));
  }

  public Storage getStorage(StorageType.Type storageType) {
    for (Storage storage : storagesBeans) {
      if (storage.getType().equals(storageType) && storage.isActive()) {
        return storage;
      }
    }
    throw new IllegalArgumentException(
        "No active storage found for type: " + storageType.getValue());
  }
}

package com.linkedin.openhouse.cluster.storage.local;

import com.linkedin.openhouse.cluster.storage.Storage;
import com.linkedin.openhouse.cluster.storage.StorageClient;
import com.linkedin.openhouse.cluster.storage.StorageType;
import com.linkedin.openhouse.cluster.storage.configs.StorageProperties;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Lazy
@Component
public class LocalStorage implements Storage {

  private static final StorageType.Type TYPE = StorageType.LOCAL;

  @Autowired private StorageProperties storageProperties;

  @Autowired private LocalStorageClient localStorageClient;

  @Override
  public boolean isActive() {
    if (storageProperties.getDefaultType() == null) {
      return true;
    } else if (storageProperties.getTypes() == null || storageProperties.getTypes().isEmpty()) {
      return true;
    } else {
      return storageProperties.getTypes().containsKey(TYPE.getValue());
    }
  }

  @Override
  public Map<String, String> getProperties() {
    return Optional.ofNullable(storageProperties.getTypes())
        .map(types -> types.get(TYPE.getValue()))
        .map(StorageProperties.StorageTypeProperties::getParameters)
        .map(HashMap::new)
        .orElseGet(HashMap::new);
  }

  @Override
  public StorageType.Type getType() {
    return TYPE;
  }

  @Override
  public StorageClient<?> getClient() {
    return localStorageClient;
  }
}

package com.linkedin.openhouse.cluster.storage.local;

import com.google.common.base.Preconditions;
import com.linkedin.openhouse.cluster.storage.StorageClient;
import com.linkedin.openhouse.cluster.storage.StorageType;
import com.linkedin.openhouse.cluster.storage.configs.StorageProperties;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import javax.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.apache.hadoop.fs.FileSystem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

/**
 * The LocalStorageClient class is an implementation of the StorageClient interface for local
 * storage. It uses an Apache Hadoop FileSystem to interact with the local file system.
 */
@Slf4j
@Lazy
@Component
public class LocalStorageClient implements StorageClient<FileSystem> {

  private FileSystem fs;

  private static final StorageType.Type TYPE = StorageType.LOCAL;

  private static final String DEFAULT_ENDPOINT = "file://";

  private static final String DEFAULT_ROOTPATH = "/tmp";

  @Autowired private StorageProperties storageProperties;

  /** Initialize the LocalStorageClient when the bean is accessed for the first time. */
  @PostConstruct
  public synchronized void init() throws URISyntaxException, IOException {
    log.info("Initializing storage client for type: " + TYPE);

    URI uri;
    if (storageProperties.getTypes() != null && !storageProperties.getTypes().isEmpty()) {
      Preconditions.checkArgument(
          storageProperties.getTypes().containsKey(TYPE.getValue()),
          "Storage properties doesn't contain type: " + TYPE.getValue());
      Preconditions.checkArgument(
          storageProperties.getTypes().get(TYPE.getValue()).getEndpoint() != null,
          "Storage properties doesn't contain endpoint for: " + TYPE.getValue());
      Preconditions.checkArgument(
          storageProperties.getTypes().get(TYPE.getValue()).getRootPath() != null,
          "Storage properties doesn't contain rootpath for: " + TYPE.getValue());
      Preconditions.checkArgument(
          storageProperties
              .getTypes()
              .get(TYPE.getValue())
              .getEndpoint()
              .startsWith(DEFAULT_ENDPOINT),
          "Storage properties endpoint was misconfigured for: " + TYPE.getValue());
      try {
        uri =
            new URI(
                storageProperties.getTypes().get(TYPE.getValue()).getEndpoint()
                    + storageProperties.getTypes().get(TYPE.getValue()).getRootPath());
      } catch (URISyntaxException e) {
        throw new IllegalArgumentException(
            "Storage properties 'endpoint', 'rootpath' was incorrectly configured for: "
                + TYPE.getValue(),
            e);
      }
    } else {
      uri = new URI(DEFAULT_ENDPOINT + DEFAULT_ROOTPATH);
    }
    this.fs = FileSystem.get(uri, new org.apache.hadoop.conf.Configuration());
  }

  @Override
  public FileSystem getNativeClient() {
    return fs;
  }
}

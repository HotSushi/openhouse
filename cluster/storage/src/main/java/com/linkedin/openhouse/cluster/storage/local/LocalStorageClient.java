package com.linkedin.openhouse.cluster.storage.local;

import com.linkedin.openhouse.cluster.storage.StorageClient;
import com.linkedin.openhouse.cluster.storage.StorageType;
import java.io.IOException;
import javax.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileSystem;
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

  /**
   * Initialize the LocalStorageClient when the bean is accessed for the first time.
   *
   * @throws IOException if an I/O error occurs
   */
  @PostConstruct
  private synchronized void init() throws IOException {
    log.info("Initialized storage client for type: " + StorageType.LOCAL.getValue());
    this.fs = FileSystem.get(new Configuration());
  }

  @Override
  public FileSystem getNativeClient() {
    return fs;
  }
}

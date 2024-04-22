package com.linkedin.openhouse.cluster.storage.local;

import com.linkedin.openhouse.cluster.storage.StorageClient;
import java.io.IOException;
import javax.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileSystem;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Slf4j
@Lazy
@Component
public class LocalStorageClient implements StorageClient<FileSystem> {

  private FileSystem fs;

  @PostConstruct
  private synchronized void init() throws IOException {
    log.debug("Initialized local storage client.");
    this.fs = FileSystem.get(new Configuration());
  }

  @Override
  public FileSystem getNativeClient() {
    return fs;
  }
}

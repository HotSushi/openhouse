package com.linkedin.openhouse.tables.mock.storage.local;

import com.linkedin.openhouse.cluster.storage.local.LocalStorageClient;
import org.apache.hadoop.fs.FileSystem;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class LocalStorageClientTest {

  @Autowired private LocalStorageClient localStorageClient;

  @Test
  public void testLocalStorageClientInitialized() {
    Object client = localStorageClient.getNativeClient();
    assert client != null;
    assert client instanceof FileSystem;
  }
}

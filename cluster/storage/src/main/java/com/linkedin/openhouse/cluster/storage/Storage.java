package com.linkedin.openhouse.cluster.storage;

import java.util.Map;

public interface Storage {
  boolean isActive();

  Map<String, String> getProperties();

  StorageType.Type getType();

  StorageClient getClient();
}

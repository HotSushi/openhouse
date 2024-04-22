package com.linkedin.openhouse.cluster.storage;

public interface StorageClient<T> {
  T getNativeClient();
}

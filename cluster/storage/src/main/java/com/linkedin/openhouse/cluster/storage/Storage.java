package com.linkedin.openhouse.cluster.storage;

import java.util.Map;

/**
 * The Storage interface represents a storage system in OpenHouse. It provides methods to check if
 * the storage is active, retrieve properties of the storage, get the type of the storage, and get a
 * client to interact with the storage.
 *
 * <p>Implementations of this interface should provide the specific logic for each type of storage.
 * For example, the {@link com.linkedin.openhouse.cluster.storage.local.LocalStorage} class is an
 * implementation of this interface for local storage, and it uses a {@link
 * com.linkedin.openhouse.cluster.storage.local.LocalStorageClient} to interact with the local file
 * system.
 */
public interface Storage {

  /**
   * Check if the storage is active.
   *
   * @return true if the storage is active, false otherwise
   */
  boolean isActive();

  /**
   * Get the properties of the storage.
   *
   * @return a map of properties of the storage
   */
  Map<String, String> getProperties();

  /**
   * Get the type of the storage.
   *
   * @return the type of the storage
   */
  StorageType.Type getType();

  /**
   * Get a client to interact with the storage.
   *
   * @return a client to interact with the storage
   */
  StorageClient getClient();
}

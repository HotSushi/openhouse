package com.linkedin.openhouse.internal.catalog;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import org.apache.commons.io.IOUtils;
import org.apache.iceberg.Snapshot;
import org.apache.iceberg.SnapshotRef;
import org.apache.iceberg.SnapshotRefParser;

public final class IcebergTestUtil {
  private static final String SNAPSHOTS_FILE = "serialized_snapshots.json";
  private static final String FUTURE_SNAPSHOTS_FILE = "future_serialized_snapshots.json";
  private static final String EXTRA_SNAPSHOTS_FILE = "extra_serialized_snapshots.json";
  private static final String WAP_SNAPSHOTS_FILE = "wap_serialized_snapshots.json";

  private IcebergTestUtil() {}

  public static List<Snapshot> getSnapshots() throws IOException {
    return loadSnapshots(SNAPSHOTS_FILE);
  }

  public static List<Snapshot> getFutureSnapshots() throws IOException {
    return loadSnapshots(FUTURE_SNAPSHOTS_FILE);
  }

  public static List<Snapshot> getExtraSnapshots() throws IOException {
    return loadSnapshots(EXTRA_SNAPSHOTS_FILE);
  }

  public static List<Snapshot> getWapSnapshots() throws IOException {
    return loadSnapshots(WAP_SNAPSHOTS_FILE);
  }

  private static List<Snapshot> loadSnapshots(String snapshotFile) throws IOException {
    InputStream inputStream =
        IcebergTestUtil.class.getClassLoader().getResourceAsStream(snapshotFile);
    String data =
        IOUtils.toString(Objects.requireNonNull(inputStream), StandardCharsets.UTF_8.name());
    return SnapshotsUtil.parseSnapshots(null, data);
  }

  public static Map<String, String> obtainSnapshotRefsFromSnapshot(Snapshot snapshot) {
    Map<String, String> snapshotRefs = new HashMap<>();
    SnapshotRef snapshotRef = SnapshotRef.branchBuilder(snapshot.snapshotId()).build();
    snapshotRefs.put(SnapshotRef.MAIN_BRANCH, SnapshotRefParser.toJson(snapshotRef));
    return snapshotRefs;
  }

  public static Map<String, String> obtainSnapshotRefsFromSnapshot(
      Snapshot snapshot, String branch) {
    Map<String, String> snapshotRefs = new HashMap<>();
    SnapshotRef snapshotRef = SnapshotRef.branchBuilder(snapshot.snapshotId()).build();
    snapshotRefs.put(branch, SnapshotRefParser.toJson(snapshotRef));
    return snapshotRefs;
  }
}

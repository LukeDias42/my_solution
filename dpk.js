const { createHash } = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event) => {
  if (!event) { 
    return TRIVIAL_PARTITION_KEY;
  }

  if (!event.partitionKey) {
      const data = JSON.stringify(event);
      return createHash("sha3-512").update(data).digest("hex");
  }

  const candidate = typeof event.partitionKey !== "string" 
    ? JSON.stringify(event.partitionKey)
    : event.partitionKey;
  
  return candidate.length <= MAX_PARTITION_KEY_LENGTH 
    ? candidate 
    : createHash("sha3-512").update(candidate).digest("hex");
};
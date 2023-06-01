const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();

    expect(trivialKey).toBe("0");
  });
  it("Returns input when partition key is smaller than MAX_PARTITION_KEY_LENGTH", () => {
    const notHashedKey = deterministicPartitionKey({
      partitionKey: "small_key",
    });

    expect(notHashedKey).toBe("small_key");
  });
  it("Returns hashed input when partition key is larger than MAX_PARTITION_KEY_LENGTH", () => {
    const bigKey = "*".repeat(300);

    const hashedKey = deterministicPartitionKey({ partitionKey: bigKey });

    expect(hashedKey).not.toBe(bigKey);
  });
  it("Returns stringyfied input when partition key is an object and is smaller than MAX_PARTITION_KEY_LENGTH", () => {
    const event = { partitionKey: { test: "test" } };

    const stringyfiedObj = deterministicPartitionKey(event);

    expect(stringyfiedObj).toBe(JSON.stringify(event.partitionKey));
  });
  it("Returns hashed stringyfied input when partition key is an object and is larger than MAX_PARTITION_KEY_LENGTH", () => {
    const bigKey = "*".repeat(300);
    const event = { partitionKey: { test: bigKey } };

    const hashedStringyfiedObj = deterministicPartitionKey(event);

    expect(hashedStringyfiedObj).not.toBe(JSON.stringify(event.partitionKey));
  });
  it("Returns hashed stringyfied input when event does not have partition key", () => { 
    const event = { test: "test" };
    const stringyfiedObj = deterministicPartitionKey(event);
    expect(stringyfiedObj).not.toBe(JSON.stringify(event));
  });
});

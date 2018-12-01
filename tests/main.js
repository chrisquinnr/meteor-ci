import { Meteor } from 'meteor/meteor';
// import assert from 'assert';

describe('cryptoTool', function () {
  // it("package.json has correct name", async function () {
  //   const { name } = await import("../package.json");
  //   assert.strictEqual(name, "cryptoTool");
  // });

  if (Meteor.isServer) {
    // it('encrypt and decrypt functions return matching
    // value to original string', async function () {
    //   const logic = await import('../server/main');
    //   const unEncryptedValue = 'test1234';
    //   const passkey = 'password';
    //   const encrypted = logic.encryptData(unEncryptedValue, passkey);
    //   const decryptedValue = logic.decryptData(encrypted, passkey);

    //   assert.strictEqual(unEncryptedValue, decryptedValue);
    // });

    // it("encrypt and decrypt can handle encrypted strings as passkey", async function () {

    //   const logic = await import('../server/main');
    //   const unEncryptedValue = 'test1234';
    //   const passkey = 'password';
    //   const encrypted = logic.encryptData(unEncryptedValue, passkey);
    //   const decryptedValue = logic.decryptData(encrypted, passkey)

    //   assert.strictEqual(unEncryptedValue, decryptedValue);

    // });
  }
});

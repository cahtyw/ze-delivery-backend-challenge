import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

abstract class EncryptionHelper {
  public static async encryptPassword(password: string): Promise<any> {
    return await bcryptjs.hash(password, 12);
  }

  public static async comparePassword(
    password: string,
    hash: string
  ): Promise<any> {
    return await bcryptjs.compare(password, hash);
  }

  public static async generateToken(
    body: object,
    secret: string,
    expiresIn = "10h"
  ): Promise<string> {
    const token = await jwt.sign(body, secret, { expiresIn });

    return token;
  }
}

export default EncryptionHelper;

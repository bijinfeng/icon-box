import { getDBInstance } from "./core/web-server";
import { Database } from "./type";

/**
 * 懒加载数据库实例
 * 避免每次模块导入时都初始化数据库
 */
let cachedDB: Database | null = null;

export const getServerDB = async (): Promise<Database> => {
  // 如果已经有缓存的实例，直接返回
  if (cachedDB) return cachedDB;

  try {
    // 根据环境选择合适的数据库实例
    cachedDB = getDBInstance();
    return cachedDB;
  } catch (error) {
    console.error("❌ Failed to initialize database:", error);
    throw error;
  }
};

export const serverDB = getDBInstance();

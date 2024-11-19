module.exports = {
    // Các phần cấu hình khác (nếu có)
    dependencies: {
      // Các thư viện khác (nếu có)
      "react-native-sqlite-storage": {
        platforms: {
          android: {
            sourceDir: "../node_modules/react-native-sqlite-storage/platforms/android-native", // Đường dẫn đến thư viện trên Android
            packageImportPath: "import io.liteglue.SQLitePluginPackage;", // Đường dẫn import cần thiết
            packageInstance: "new SQLitePluginPackage()", // Khởi tạo instance cho plugin
          },
        },
      },
      // Các thư viện khác (nếu có)
    },
    // Các phần cấu hình khác (nếu có)
  };
  
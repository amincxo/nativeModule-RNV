# حداقل نسخه CMake مورد نیاز
cmake_minimum_required(VERSION 3.13)

# تعریف پروژه
project(v2rayapp C CXX)

# تنظیمات C++
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# مسیر React Native
set(REACT_ANDROID_DIR "${CMAKE_SOURCE_DIR}/../node_modules/react-native/ReactAndroid")

# اضافه کردن مسیرهای اضافی برای پیدا کردن فایل‌های پیکربندی
set(CMAKE_PREFIX_PATH
    "${CMAKE_PREFIX_PATH}"
    "${REACT_ANDROID_DIR}/build/react-native-0.x.x/prefab" # مسیر احتمالی فایل‌های Prefab
    "${CMAKE_SOURCE_DIR}/.cxx/Debug/5x622a4m/prefab/arm64-v8a/prefab" # مسیر تولید شده توسط Gradle
)

# پیدا کردن کتابخانه‌های React Native با استفاده از Prefab
find_package(fbjni REQUIRED CONFIG)
find_package(reactnative REQUIRED CONFIG)

# پیدا کردن و لینک کردن کتابخانه‌های مورد نیاز
find_library(log-lib log)

# لینک کردن libgojni
add_library(libgojni SHARED IMPORTED)
set_target_properties(libgojni PROPERTIES IMPORTED_LOCATION
    "${CMAKE_SOURCE_DIR}/libs/arm64-v8a/libgojni.so") # مسیر فایل .so

# تعریف یه هدف نیتیو برای اپلیکیشن
add_library(v2rayapp SHARED
    # چون فایل C++ نداری، یه فایل خالی می‌سازیم تا خطای "No SOURCES" برطرف بشه
    "${CMAKE_CURRENT_BINARY_DIR}/dummy.c"
)

# ساخت یه فایل خالی برای رفع خطای "No SOURCES"
file(WRITE "${CMAKE_CURRENT_BINARY_DIR}/dummy.c" "void dummy() {}")

# لینک کردن همه کتابخانه‌ها به هدف v2rayapp
target_link_libraries(v2rayapp
    reactnative::reactnative
    fbjni::fbjni
    ${log-lib}
    libgojni
    android
)
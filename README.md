
# وی تو ری (V2Ray) کلاینت با ری‌اکت نیتیو

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![V2Ray](https://img.shields.io/badge/V2Ray-3A6DAD.svg?style=for-the-badge&logo=v2ray&logoColor=white)

یک کلاینت وی تو ری (V2Ray) ساخته شده با ری‌اکت نیتیو برای پلتفرم‌های موبایل (Android/iOS)

## ویژگی‌ها

- رابط کاربری ساده و کاربرپسند
- پشتیبانی از پیکربندی‌های مختلف V2Ray
- نمایش وضعیت اتصال به صورت لحظه‌ای
- مدیریت سرورها و پروفایل‌ها
- سازگاری با آخرین نسخه‌های V2Ray
- طراحی واکنش‌گرا برای دستگاه‌های مختلف

## پیش‌نیازها

- Node.js (نسخه 16 یا بالاتر)
- npm یا yarn
- ری‌اکت نیتیو CLI
- محیط توسعه اندروید/آی‌اواس (Android Studio/Xcode)

## نصب و راه‌اندازی

1. ریپازیتوری را کلون کنید:
```bash
git clone https://github.com/amincxo/nativeModule-RNV.git
cd nativeModule-RNV
```

2. وابستگی‌ها را نصب کنید:
```bash
npm install
# یا
yarn install
```

3. برای اجرا روی اندروید:
```bash
npx react-native run-android
```

4. برای اجرا روی آی‌اواس:
```bash
npx react-native run-ios
```

## ساختار پروژه

```
nativeModule-RNV/
├── android/          # کدهای خاص پلتفرم اندروید
├── ios/             # کدهای خاص پلتفرم آی‌اواس
├── src/             # کدهای اصلی برنامه
│   ├── components/  # کامپوننت‌های ری‌اکت
│   ├── screens/     # صفحات مختلف برنامه
│   ├── utils/       # ابزارهای کمکی
│   └── ...         
├── App.js           # نقطه ورود برنامه
└── ...
```

## مشارکت

مشارکت‌ها، گزارش باگ و درخواست‌های جدید همیشه مورد استقبال هستند!

1. ریپازیتوری را فورک کنید
2. یک برنچ جدید ایجاد کنید (`git checkout -b feature/AmazingFeature`)
3. تغییرات را کامیت کنید (`git commit -m 'Add some AmazingFeature'`)
4. به برنچ اصلی پوش کنید (`git push origin feature/AmazingFeature`)
5. یک Pull Request باز کنید

## مجوز

این پروژه تحت مجوز [MIT](LICENSE) منتشر شده است.

## حمایت

اگر این پروژه برای شما مفید بود، می‌توانید با ستاره دادن به ریپازیتوری از آن حمایت کنید ⭐
```

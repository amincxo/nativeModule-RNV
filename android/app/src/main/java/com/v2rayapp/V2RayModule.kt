package com.v2rayapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback
import go.Seq
import libv2ray.V2RayPoint

class V2RayModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private var v2rayPoint: V2RayPoint? = null
    private var isRunning = false

    init {
        Seq.setContext(reactContext)
        v2rayPoint = V2RayPoint(null, false) // مقداردهی اولیه با پشتیبانی VPN نال و asyncResolve=false
    }

    override fun getName(): String {
        return "V2RayModule"
    }

    @ReactMethod
    fun startV2Ray(config: String, callback: Callback) {
        try {
            if (!isRunning) {
                v2rayPoint?.let {
                    it.setConfigureFileContent(config) // تنظیم کانفیگ
                    it.runLoop(false) // شروع V2Ray (false یعنی بدون async)
                    isRunning = true
                    callback.invoke("V2Ray شروع شد")
                } ?: callback.invoke("خطا: V2RayPoint مقداردهی نشده")
            } else {
                callback.invoke("V2Ray قبلاً در حال اجراست")
            }
        } catch (e: Exception) {
            callback.invoke("خطا: ${e.message}")
        }
    }

    @ReactMethod
    fun stopV2Ray(callback: Callback) {
        try {
            if (isRunning) {
                v2rayPoint?.stopLoop() // توقف V2Ray
                isRunning = false
                callback.invoke("V2Ray متوقف شد")
            } else {
                callback.invoke("V2Ray در حال اجرا نیست")
            }
        } catch (e: Exception) {
            callback.invoke("خطا: ${e.message}")
        }
    }
}
module.exports = async (require) => {
    const path = require("path");
    const express = require("express");
    const AutoEncrypt = require("@small-tech/auto-encrypt");
    const killTheNewsletter = require(".").default;

    const {
        webApplication,
        emailApplication
    } = killTheNewsletter(
        path.join(__dirname, "data")
    );

    webApplication.set("url", "https://kill-the-newsletter.com");
    webApplication.set("email", "smtp://kill-the-newsletter.com");
    webApplication.set("administrator", "mailto:kill-the-newsletter@leafac.com");

    webApplication.listen(8080)
    emailApplication.listen(25, () => {
        console.log("Email server started");
    });
};

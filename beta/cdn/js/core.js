window.jQuery || alert("読み込みに失敗しました");

$(".g-recaptcha").fadeOut(0);

$(".continue").fadeOut(0);

if (navigator.userAgent.toLowerCase().match(/chrome|firefox|opera/)) {
    $(".loading").text("読み込み中...");
} else {
    $(".loading").text("Chrome、Firefox、Operaでの閲覧をお勧めします");
}

var link = "";

var adblock = false;

var NhCRHtBnbWbgjJMDBbFbpxryZhKmPXlk = "UIGDSYsQkInaNpPMsStIwUamGovIuglg";

var TjtQpaxCeASruFDdTWrdKxxQYZBesdrp = "";

$.ajaxSetup({ cache: false });

$("#totop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 500);
    return false;
});

$(".continue").click(function () {
    $(".loading").fadeOut(1000);
    $(".continue").fadeOut(1000);
    setTimeout(function () {
        $(".loading").text("読み込みが完了しました");
        $(".loading").fadeIn(1000);
        setTimeout(function () {
            $(".preloader-background").fadeOut(1000);
            $("#main").fadeIn(1000);
            $("title").text("DJS-JPN - 今の Discord ボットにはないものを目指して...");
            $("html").css("cursor", "auto");
            setTimeout(function () {
                M.toast({ html: "DJS-JPN 公式サイトへようこそ！" });
                M.toast({ html: "この通知は時間経過で自動で閉じられます" });
                M.toast({ html: "もし邪魔な場合はスライドで消すこともできます" });
            }, 1000);
        }, 1300);
    }, 1000);
});

$(".tooltipped").tooltip({
    inDuration: 500,
    outDuration: 500,
});

$(".dropdown").dropdown({
    coverTrigger: false,
    inDuration: 500,
    outDuration: 500
});

$(".modal").modal({
    inDuration: 500,
    outDuration: 500,
    dismissible: false
});

$("html")
    .bind("touchstart touchmove", function () {
        $("#totop").css("visibility", "hidden");
    })
    .bind("touchend", function () {
        $("#totop").css("visibility", "visible");
    });

$("html").bind("contextmenu", function () { return false; });

function setlink(l) {
    link = l;
    if (l.slice(0, 18) == "https://djs-jpn.ga") {
        $("#warnmsg").text("外部ページ " + l + " へとジャンプします。外部ページへとジャンプしてもよろしいでしょうか？（リンクは新しいタブで開かれます）");
    } else {
        $("#warnmsg").text("外部サイト " + l + " へとジャンプします。外部サイトへとジャンプしてもよろしいでしょうか？（リンクは新しいタブで開かれます）");
    }
}

function getproxstats() {
    $(".g-recaptcha").css("visibility", "visible");
    $(".continue").css("visibility", "visible");
    $.get("https://jsonip.com", function (r) {
        TjtQpaxCeASruFDdTWrdKxxQYZBesdrp = r.ip;
        $.get("https://proxycheck.io/v2/" + TjtQpaxCeASruFDdTWrdKxxQYZBesdrp, { vpn: 1 }, function (r) {
            if (r.status == "ok") {
                NhCRHtBnbWbgjJMDBbFbpxryZhKmPXlk = r[TjtQpaxCeASruFDdTWrdKxxQYZBesdrp].proxy;
            }
            var FakeAd = document.createElement("div");
            FakeAd.innerHTML = "&nbsp";
            FakeAd.className = "adsbygoogle";
            document.body.appendChild(FakeAd);
            setTimeout(function () {
                if (FakeAd.offsetHeight === 0) {
                    adblock = true;
                }
                FakeAd.remove();
                load();
            }, 100);
        });
    });
}

function load() {
    $(".loading").fadeOut(1000);
    setTimeout(function () {
        if (NhCRHtBnbWbgjJMDBbFbpxryZhKmPXlk != "UIGDSYsQkInaNpPMsStIwUamGovIuglg") {
            if (NhCRHtBnbWbgjJMDBbFbpxryZhKmPXlk == "yes") {
                $(".loading").text("プロキシが検出されました");
                $(".loading").fadeIn(1000);
                setTimeout(function () {
                    $(".loading").addClass("animated tada");
                }, 500);
                $(".g-recaptcha").fadeIn(1000);
            } else {
                if (adblock) {
                    $(".loading").text("アドブロックが検出されました");
                    $(".loading").fadeIn(1000);
                    $(".continue").fadeIn(1000);
                    setTimeout(function () {
                        $(".loading").addClass("animated tada");
                    }, 500);
                    setTimeout(function () {
                        $(".continue").text("2");
                        $(".loading").removeClass("animated tada");
                        setTimeout(function () {
                            $(".continue").text("1");
                            setTimeout(function () {
                                $(".continue").fadeOut(500);
                                setTimeout(function () {
                                    $(".continue").text("CONTINUE");
                                    $(".continue").removeClass("disabled");
                                    $(".continue").fadeIn(500);
                                }, 500);
                            }, 1000);
                        }, 1000);
                    }, 1500);
                } else {
                    $(".loading").text("読み込みが完了しました");
                    $(".loading").fadeIn(1000);
                    setTimeout(function () {
                        $(".preloader-background").fadeOut(1000);
                        $("#main").fadeIn(1000);
                        $("title").text("DJS-JPN - 今の Discord ボットにはないものを目指して...");
                        $("html").css("cursor", "auto");
                        setTimeout(function () {
                            M.toast({ html: "DJS-JPN 公式サイトへようこそ！" });
                            M.toast({ html: "この通知は時間経過で自動で閉じられます" });
                            M.toast({ html: "もし邪魔な場合はスライドで消すこともできます" });
                        }, 1000);
                    }, 1000);
                }
            }
        } else {
            $(".loading").text("読み込みに失敗しました");
            $(".loading").fadeIn(1000);
            setTimeout(function () {
                $(".loading").fadeOut(1000);
                setTimeout(function () {
                    if (navigator.userAgent.toLowerCase().match(/chrome|firefox|opera/)) {
                        $(".loading").text("読み込み中...");
                    } else {
                        $(".loading").text("Chrome、Firefox、Operaでの閲覧をお勧めします");
                    }
                    $(".loading").fadeIn(1000);
                    setTimeout(function () {
                        getproxstats();
                    }, 1000);
                }, 1000);
            }, 2000);
        }
    }, 1000);
}

function khORyggZxvYitoQSPajRPidrNctAfVmI(c) {
    if (c) {
        if (c.length >= 526) {
            if (adblock) {
                $(".loading").fadeOut(1000);
                $(".g-recaptcha").fadeOut(1000);
                setTimeout(function () {
                    $(".loading").text("アドブロックが検出されました");
                    $(".loading").fadeIn(1000);
                    $(".continue").fadeIn(1000);
                    setTimeout(function () {
                        $(".continue").text("2");
                        $(".loading").removeClass("animated tada");
                        setTimeout(function () {
                            $(".continue").text("1");
                            setTimeout(function () {
                                $(".continue").fadeOut(500);
                                setTimeout(function () {
                                    $(".continue").text("CONTINUE");
                                    $(".continue").removeClass("disabled");
                                    $(".continue").fadeIn(500);
                                }, 500);
                            }, 1000);
                        }, 1000);
                    }, 1500);
                }, 1000);
            } else {
                $(".loading").fadeOut(1000);
                $(".g-recaptcha").fadeOut(1000);
                $(".loading").removeClass("animated tada");
                setTimeout(function () {
                    $(".loading").text("読み込みが完了しました");
                    $(".loading").fadeIn(1000);
                    setTimeout(function () {
                        $(".preloader-background").fadeOut(500);
                        $("#main").delay(500).fadeIn(500);
                        $("title").text("DJS-JPN - 今の Discord ボットにはないものを目指して...");
                        $("html").css("cursor", "auto");
                        setTimeout(function () {
                            M.toast({ html: "DJS-JPN 公式サイトへようこそ！" });
                            M.toast({ html: "この通知は時間経過で自動で閉じられます" });
                            M.toast({ html: "もし邪魔な場合はスライドで消すこともできます" });
                        }, 1000);
                    }, 1000);
                }, 1000);
            }
        } else {
            $(".loading").fadeOut(1000);
            $(".g-recaptcha").fadeOut(1000);
            setTimeout(function () {
                $(".loading").text("不正なアクセスが検出されました");
                $(".loading").fadeIn(1000);
            }, 1000);
        }
    } else {
        $(".loading").fadeOut(1000);
        $(".g-recaptcha").fadeOut(1000);
        setTimeout(function () {
            $(".loading").text("不正なアクセスが検出されました");
            $(".loading").fadeIn(1000);
        }, 1000);
    }
}

$(window).on("load", function () {
    getproxstats();
});
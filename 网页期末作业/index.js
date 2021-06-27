$(() => {
    setInterval(() => {
        //向下箭头
        $(".slideshow span").css({ "top": "+=1px" })
        if ($(".slideshow span").css("top") == "580px") {
            $(".slideshow span").css("top", "570px")
        }
    }, 100)
    //首部圆点
    $("#dot a:eq(0)").css("opacity", "1")
    var time1,obj={}
    for (let i = 0; i < $("#dot a").length; i++) {
        $("#dot a").eq(i).click(() => {
            clearInterval(time5)
            clearInterval(time3)
            clearInterval(time1)
            $("#dot a").css("opacity", "")
            $("#dot a").eq(i).css("opacity", "1")
            if (parseFloat($(".slideshow ul").css("left")) > -1518.400 * i) {
                time1 = setInterval(() => {
                    $(".slideshow ul").css("left", "-=10px")
                    if (parseFloat($(".slideshow ul").css("left")) < -1518.400 * i) {
                        $(".slideshow ul").css("left", -1518.400 * i + "px")
                    }
                    if ($(".slideshow ul").css("left") == -1518.400 * i + "px") {
                        clearInterval(time1)
                    }
                }, 5)
            }
            if (parseFloat($(".slideshow ul").css("left")) < -1518.400 * i) {
                time1 = setInterval(() => {
                    $(".slideshow ul").css("left", "+=10px")
                    if (parseFloat($(".slideshow ul").css("left")) > -1518.400 * i) {
                        $(".slideshow ul").css("left", -1518.400 * i + "px")
                    }
                    if ($(".slideshow ul").css("left") == -1518.400 * i + "px") {
                        clearInterval(time1)
                    }
                }, 5)
            }
            autoChange()
        })
    }
    var time5,time3
    var autoChange = () => {
        let index = 0
        time5 = setInterval(() => {
            clearInterval(time3)
            index++
            if (index >= 4) {
                index = 0
                $(".slideshow ul").css("left","0px")
                $("#dot a").css("opacity", "")
                $("#dot a").eq(0).css("opacity", "1")
            }
            if (parseFloat($(".slideshow ul").css("left")) > -1518.400 * index) {
              time3 = setInterval(() => {
                    $(".slideshow ul").css("left", "-=10px")
                    if (parseFloat($(".slideshow ul").css("left")) < -1518.400 * index) {
                        $(".slideshow ul").css("left", -1518.400 * index + "px")
                    }
                    if ($(".slideshow ul").css("left") == -1518.400 * index + "px") {
                        clearInterval(time3)
                    }
                }, 10)
            }
            if (parseFloat($(".slideshow ul").css("left")) < -1518.400 * index) {
               time3 = setInterval(() => {
                    $(".slideshow ul").css("left", "+=10px")
                    if (parseFloat($(".slideshow ul").css("left")) > -1518.400 * index) {
                        $(".slideshow ul").css("left", -1518.400 * index + "px")
                    }
                    if ($(".slideshow ul").css("left") == -1518.400 * index + "px") {
                        clearInterval(time3)
                    }
                }, 10)
            }
            $("#dot a").css("opacity", "")
            $("#dot a").eq(index).css("opacity", "1")
        }, 3000)
    }
    autoChange()

})
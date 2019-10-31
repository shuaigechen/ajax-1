let n = 1;//声明最开始是页面1
getPAGE.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)//把JSON字符串变成数组
            //对数组的每一项，插到ul后面
            array.forEach(item => {//把每一项的名字叫item
                const li = document.createElement('li');//创造一个li元素
                li.textContent = item.id;//li的内容等于item的id
                xxx.appendChild(li);//把li插到ul里面
            });
            n += 1;//每次运行结束，加1，跳转到下一页
        }
    }
    request.send()
};

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const object = JSON.parse(request.response)//json.parse可以把符合JSON语法的字符串变成对应的对象，或者其他东西
            myName.textContent = object.name//可以修改html里的内容，使用ajax
        }
    };
    request.send()
};

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            //responseXML自动把信息变成document对象
            const dom = request.responseXML
            //通过dom的get API 找到warning标签，获取它的textContent（节点的文本内容），getElementsByTagName获取的是伪数组，使用下标获取单个元素
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())//trim()去掉字符串周围的回车空格
        }
    }
    request.send()
};

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        //创建一个div
        const div = document.createElement('div')
        //填写div内容
        div.innerHTML = request.response
        //把div插到body里
        document.body.appendChild(div)

    }
    request.onerror = () => {

    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        //创建script标签
        const script = document.createElement('script')
        //填写script内容
        script.innerHTML = request.response
        //插到body里
        document.body.appendChild(script)
    };
    request.onerror = () => {
        console.log('失败了')
    };
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onreadystatechange = () => {
        //下载完成但并不知道是成功2xx还是失败4xx
        if (request.readyState === 4) {//如果request的readyState等于4，4是状态码，说明下载完成
            if (request.status >= 200 && request.status < 300) {//请求的status，响应码是大于200而且小于300
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                alert('加载CSS失败')
            }
        }
    };
    request.send()
}

/*getCSS.onclick = () => {//按钮的点击事件等于一个函数
    const request = new XMLHttpRequest();//创建一个XMLHttpRequest对象
    request.open('GET', '/style.css');//调用它的open方法，第一个参数是请求（get（获取资源），post），第二个参数是url，获取的是谁，路径
    request.onload = () => {//监听它的成功
        //创建style标签
        const style = document.createElement('style')
        //填写style标签内容
        style.innerHTML = request.response//response拿到请求的响应，style的内容等于请求的响应内容
        //把style标签插入到head里
        document.head.appendChild(style)
    };
    request.onerror = () => {//监听失败
        console.log('失败了');
    };
    request.send();//发送请求
}*/

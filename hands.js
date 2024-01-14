function calcWAspect(w0, h0, w1, h1) {
    const woh = w0 / h0;
    const how = h0 / w0;

    const hwar = w1 * how;
    const whar = h1 * woh;

    console.log(woh, how, w0, h0, w1, h1, whar, hwar);
    
    if (hwar > h1) {
        console.log( [whar, h1] );
        return [ whar, h1 ]
    } else {
        console.log( [w1,hwar] );
        return [ w1, hwar ];
    }
}

let extras = {
    "image": {},
    "multiHandLandmarks": [
      [
        {
          "x": 0.2694644331932068,
          "y": 0.7550435066223145,
          "z": 3.7148853948565375e-7
        },
        {
          "x": 0.32064446806907654,
          "y": 0.7239559292793274,
          "z": -0.020104311406612396
        },
        {
          "x": 0.35842418670654297,
          "y": 0.6599426865577698,
          "z": -0.026949433609843254
        },
        {
          "x": 0.3849036693572998,
          "y": 0.6090511083602905,
          "z": -0.03255312144756317
        },
        {
          "x": 0.4143919348716736,
          "y": 0.5891000032424927,
          "z": -0.03851889446377754
        },
        {
          "x": 0.318936824798584,
          "y": 0.5817853808403015,
          "z": -0.01908702589571476
        },
        {
          "x": 0.3407417833805084,
          "y": 0.5180716514587402,
          "z": -0.03220828250050545
        },
        {
          "x": 0.35208582878112793,
          "y": 0.47474509477615356,
          "z": -0.042863909155130386
        },
        {
          "x": 0.359497606754303,
          "y": 0.43715131282806396,
          "z": -0.0516229085624218
        },
        {
          "x": 0.28151604533195496,
          "y": 0.57315993309021,
          "z": -0.020190522074699402
        },
        {
          "x": 0.2803044021129608,
          "y": 0.49752604961395264,
          "z": -0.03263933211565018
        },
        {
          "x": 0.2804567217826843,
          "y": 0.4509364366531372,
          "z": -0.04234664887189865
        },
        {
          "x": 0.2783487141132355,
          "y": 0.41157281398773193,
          "z": -0.049726273864507675
        },
        {
          "x": 0.24849411845207214,
          "y": 0.5830849409103394,
          "z": -0.02382861077785492
        },
        {
          "x": 0.23125292360782623,
          "y": 0.5151304006576538,
          "z": -0.03844992816448212
        },
        {
          "x": 0.22077631950378418,
          "y": 0.47007250785827637,
          "z": -0.04948488622903824
        },
        {
          "x": 0.21215176582336426,
          "y": 0.4304072856903076,
          "z": -0.05700244754552841
        },
        {
          "x": 0.21938952803611755,
          "y": 0.6088434457778931,
          "z": -0.029449541121721268
        },
        {
          "x": 0.18901394307613373,
          "y": 0.5598472952842712,
          "z": -0.04524332284927368
        },
        {
          "x": 0.1702183187007904,
          "y": 0.5264221429824829,
          "z": -0.053967829793691635
        },
        {
          "x": 0.155103400349617,
          "y": 0.4918135106563568,
          "z": -0.05941634252667427
        }
      ],
      [
        {
          "x": 0.7146937847137451,
          "y": 0.6962167024612427,
          "z": 2.838775969848939e-7
        },
        {
          "x": 0.6625295877456665,
          "y": 0.6799375414848328,
          "z": -0.015540584921836853
        },
        {
          "x": 0.6150654554367065,
          "y": 0.635489821434021,
          "z": -0.021633589640259743
        },
        {
          "x": 0.5840212106704712,
          "y": 0.5943921804428101,
          "z": -0.026905063539743423
        },
        {
          "x": 0.559683620929718,
          "y": 0.5620869994163513,
          "z": -0.032245002686977386
        },
        {
          "x": 0.6393410563468933,
          "y": 0.5433161854743958,
          "z": -0.01358945481479168
        },
        {
          "x": 0.605495274066925,
          "y": 0.4857338070869446,
          "z": -0.0263573806732893
        },
        {
          "x": 0.5855275988578796,
          "y": 0.44884559512138367,
          "z": -0.036729179322719574
        },
        {
          "x": 0.5710226893424988,
          "y": 0.41599196195602417,
          "z": -0.04484177380800247
        },
        {
          "x": 0.6712092757225037,
          "y": 0.5227823853492737,
          "z": -0.018056515604257584
        },
        {
          "x": 0.6549418568611145,
          "y": 0.44635817408561707,
          "z": -0.028958886861801147
        },
        {
          "x": 0.6465552449226379,
          "y": 0.3969728648662567,
          "z": -0.04004952311515808
        },
        {
          "x": 0.6398957371711731,
          "y": 0.3564129173755646,
          "z": -0.04857288673520088
        },
        {
          "x": 0.7039421200752258,
          "y": 0.5224175453186035,
          "z": -0.025176431983709335
        },
        {
          "x": 0.7090252041816711,
          "y": 0.45045459270477295,
          "z": -0.042445648461580276
        },
        {
          "x": 0.7129583954811096,
          "y": 0.3998289108276367,
          "z": -0.05730162560939789
        },
        {
          "x": 0.7149516940116882,
          "y": 0.3559821546077728,
          "z": -0.067262664437294
        },
        {
          "x": 0.7358061671257019,
          "y": 0.5386966466903687,
          "z": -0.03311787545681
        },
        {
          "x": 0.7601041793823242,
          "y": 0.4825502038002014,
          "z": -0.05209861323237419
        },
        {
          "x": 0.7783209681510925,
          "y": 0.4448515474796295,
          "z": -0.06233349069952965
        },
        {
          "x": 0.792527437210083,
          "y": 0.4113367199897766,
          "z": -0.06866610795259476
        }
      ]
    ],
    "multiHandWorldLandmarks": [
      [
        {
          "x": -0.006757086608558893,
          "y": 0.08708615601062775,
          "z": 0.006420135498046875
        },
        {
          "x": 0.024992678314447403,
          "y": 0.06448018550872803,
          "z": -0.00847625732421875
        },
        {
          "x": 0.047842469066381454,
          "y": 0.04107346758246422,
          "z": -0.01080322265625
        },
        {
          "x": 0.06604748964309692,
          "y": 0.015142297372221947,
          "z": -0.0156097412109375
        },
        {
          "x": 0.08074118942022324,
          "y": -0.0044557275250554085,
          "z": -0.00951385498046875
        },
        {
          "x": 0.027841441333293915,
          "y": -0.00123899569734931,
          "z": 0.0027332305908203125
        },
        {
          "x": 0.03909095376729965,
          "y": -0.027169741690158844,
          "z": -0.0067596435546875
        },
        {
          "x": 0.04651234298944473,
          "y": -0.04631133750081062,
          "z": -0.0157623291015625
        },
        {
          "x": 0.05195360630750656,
          "y": -0.05706696957349777,
          "z": -0.04461669921875
        },
        {
          "x": 0.002158643677830696,
          "y": -0.0049955775029957294,
          "z": 0.005664825439453125
        },
        {
          "x": 0.002394868526607752,
          "y": -0.041762493550777435,
          "z": -0.006282806396484375
        },
        {
          "x": 0.0015684599056839943,
          "y": -0.058321621268987656,
          "z": -0.0271148681640625
        },
        {
          "x": 0.0029755537398159504,
          "y": -0.07811157405376434,
          "z": -0.046417236328125
        },
        {
          "x": -0.02076735720038414,
          "y": -0.0005901699187234044,
          "z": -0.001239776611328125
        },
        {
          "x": -0.027677517384290695,
          "y": -0.029530731961131096,
          "z": -0.0136566162109375
        },
        {
          "x": -0.030716154724359512,
          "y": -0.04820394888520241,
          "z": -0.029205322265625
        },
        {
          "x": -0.033155836164951324,
          "y": -0.06604193896055222,
          "z": -0.048187255859375
        },
        {
          "x": -0.03848055750131607,
          "y": 0.013574161566793919,
          "z": -0.007038116455078125
        },
        {
          "x": -0.050185300409793854,
          "y": -0.005838542245328426,
          "z": -0.0088653564453125
        },
        {
          "x": -0.06187340244650841,
          "y": -0.024073906242847443,
          "z": -0.01471710205078125
        },
        {
          "x": -0.0650516226887703,
          "y": -0.03983348235487938,
          "z": -0.027862548828125
        }
      ],
      [
        {
          "x": 0.02264794334769249,
          "y": 0.08376060426235199,
          "z": 0.0059814453125
        },
        {
          "x": -0.010810591280460358,
          "y": 0.06921302527189255,
          "z": -0.0029277801513671875
        },
        {
          "x": -0.03615495562553406,
          "y": 0.052968233823776245,
          "z": -0.0087127685546875
        },
        {
          "x": -0.06207363307476044,
          "y": 0.03053266741335392,
          "z": -0.01436614990234375
        },
        {
          "x": -0.07989282160997391,
          "y": 0.01000850461423397,
          "z": -0.01751708984375
        },
        {
          "x": -0.031057579442858696,
          "y": 0.008531143888831139,
          "z": 0.002956390380859375
        },
        {
          "x": -0.045814864337444305,
          "y": -0.019063454121351242,
          "z": -0.00444793701171875
        },
        {
          "x": -0.057693250477313995,
          "y": -0.03302130848169327,
          "z": -0.01476287841796875
        },
        {
          "x": -0.0697564035654068,
          "y": -0.042131632566452026,
          "z": -0.04150390625
        },
        {
          "x": -0.006378103047609329,
          "y": -0.002454871777445078,
          "z": 0.00605010986328125
        },
        {
          "x": -0.0142544936388731,
          "y": -0.04108503833413124,
          "z": -0.00551605224609375
        },
        {
          "x": -0.023931819945573807,
          "y": -0.05810472369194031,
          "z": -0.0271759033203125
        },
        {
          "x": -0.034835007041692734,
          "y": -0.07304886728525162,
          "z": -0.049652099609375
        },
        {
          "x": 0.020345838740468025,
          "y": -0.006810683757066727,
          "z": -0.0012788772583007812
        },
        {
          "x": 0.019652877002954483,
          "y": -0.03763369098305702,
          "z": -0.0092926025390625
        },
        {
          "x": 0.01720813661813736,
          "y": -0.05799856036901474,
          "z": -0.0274658203125
        },
        {
          "x": 0.014277540147304535,
          "y": -0.07400884479284286,
          "z": -0.04913330078125
        },
        {
          "x": 0.037982724606990814,
          "y": 0.004567793570458889,
          "z": -0.00833892822265625
        },
        {
          "x": 0.04911821708083153,
          "y": -0.018374500796198845,
          "z": -0.00740814208984375
        },
        {
          "x": 0.058698419481515884,
          "y": -0.03669244423508644,
          "z": -0.0168609619140625
        },
        {
          "x": 0.06266313046216965,
          "y": -0.04868294298648834,
          "z": -0.0275726318359375
        }
      ]
    ],
    "multiHandedness": [
      {
        "index": 0,
        "score": 0.9775390625,
        "label": "Left"
      },
      {
        "index": 1,
        "score": 0.9259033203125,
        "label": "Right"
      }
    ]
  };



let reportNext = false;

function startCamera(cam) {
    var a = cam, b;
    return J(new I(new B(function(e) {
        navigator.mediaDevices && navigator.mediaDevices.getUserMedia || alert("No navigator.mediaDevices.getUserMedia exists.");
        b = a.h;
        return e.return(navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: b.facingMode,
                width: b.width,
                height: b.height
            }
        }).then(function(f) {
            O(a, f)
        }).catch(function(f) {
            var h = "Failed to acquire camera feed: " + f;
            console.error(h);
            alert(h);
            throw f;
        }))
    }
    )));
}

document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('input-video');
    const canvasElement = document.getElementById('output-canvas');
    const canvasCtx = canvasElement.getContext('2d');
    const outCont = document.querySelector('.out-container');

    function onResults(results) {
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, canvasElement.clientWidth, canvasElement.height);
        // canvasCtx.drawImage(
        //     results.image, 0, 0, canvasElement.width, canvasElement.height
        // );

        if (reportNext) {
            console.log(results);
            reportNext = false;
        }

        if (results.multiHandLandmarks) {
            results.multiHandLandmarks.forEach( (landmarks,i) => {
                drawConnectors(
                    canvasCtx, landmarks, HAND_CONNECTIONS,
                    { color: results.multiHandedness[i].index == 0 ? '#00FF00' : '#a3a300', lineWidth: 5 }
                );
                drawLandmarks(
                    canvasCtx, landmarks,
                    { color: results.multiHandedness[i].index == 0 ? '#FF0000' : '00b5b5', lineWidth: 2 }
                );
                drawLandmarks(
                    canvasCtx, [ landmarks[15] ],
                    { color: '#ae1167', lineWidth: 5 }
                );
            });
        }
        // if (extras.multiHandLandmarks) {
        //     extras.multiHandLandmarks.forEach( (landmarks,i) => {
        //         drawConnectors(
        //             canvasCtx, landmarks, HAND_CONNECTIONS,
        //             { color: extras.multiHandedness[i].index == 0 ? '#00FF00' : '#a3a300', lineWidth: 5 }
        //         );
        //         drawLandmarks(
        //             canvasCtx, landmarks,
        //             { color: extras.multiHandedness[i].index == 0 ? '#FF0000' : '00b5b5', lineWidth: 2 }
        //         );
        //     });
        // }
        canvasCtx.restore();
    }

    navigator.mediaDevices.getUserMedia({ video: true })
        .then( (stream)  => {
            videoElement.srcObject = stream;
            // videoElement.play();
            const { width: vWidth, height: vHeight } = stream.getTracks()[0].getSettings();

            let hands = null;
            window.camera = null;

            let lastW = null; lastH = null;

            const createHands = () => {
                hands = new Hands({
                    locateFile: (file) => {
                        return `/libs/mediapipe/hands/${file}`;
                    }
                });
                hands.setOptions({
                    maxNumHands: 2,
                    modelComplexity: 1,
                    minDetectionConfidence: 0.5,
                    minTrackingConfidence: 0.5
                });
                hands.onResults(onResults);
            }

            const redoCamera = (ev) => {
                const width = ev.target.clientWidth;
                const height = ev.target.clientHeight;
                
                if ((lastW === width) && (lastH === height)) {
                    return;
                }

                if (width === undefined || height === undefined) {
                    console.log('Undefined size');
                    return;
                }

                console.log(lastW, width, lastH, height);


                lastW = width;
                lastH = height;

                const [ aWidth, aHeight ] = calcWAspect(vWidth, vHeight, width, height);
                console.log(`Canvas will be ${aWidth} x ${aHeight}`);

                if (window.camera !== null) {
                    window.camera.stop();
                    window.oldCamera = window.camera;
                }

                canvasElement.width = aWidth;
                canvasElement.height = aHeight;
                canvasElement.style.width = `${aWidth}px`;
                canvasElement.style.height = `${aHeight}px`;

                setTimeout( () => {
                    if (hands === null) {
                        createHands();
                    }

                    const newCamera = new Camera(videoElement, {
                        onFrame: async () => {
                            await hands.send({ image: videoElement });
                        },
                        width: vWidth, height: vHeight
                    });

                    window.camera = newCamera;
                    newCamera.start();

                    if (document.body.classList.contains('still-loading')) {
                        setTimeout( () => {
                            console.log('Stopping loading');
                            document.body.classList.remove('still-loading');
                            document.body.classList.add('fade-loading');
                            setTimeout( () => {
                                document.body.classList.remove('fade-loading');
                            }, 200);
                        }, 0);
                    }
                }, 0);
            }

            videoElement.addEventListener('resize', redoCamera);

            redoCamera({ target: videoElement });


            // const width = videoElement.clientWidth;
            // const height = videoElement.clientHeight;

            // const [ aWidth, aHeight ] = calcWAspect(vWidth, vHeight, width, height);

            // canvasElement.width = aWidth;
            // canvasElement.height = aHeight;

            // console.log(aWidth, aHeight);

            
            // setTimeout( () => {
                // const camera = new Camera(videoElement, {
                //     onFrame: async () => {
                //         await hands.send({ image: videoElement });
                //     },
                //     width: vWidth, height: vHeight
                // });

                // camera.start();
                // window.camera = camera;

                // setTimeout( () => {
                //     console.log('Stopping loading');
                //     document.body.classList.remove('still-loading');
                //     document.body.classList.add('fade-loading');
                //     setTimeout( () => {
                //         document.body.classList.remove('fade-loading');
                //     }, 200);
                // }, 0);
            // }, 0);
        });
});

document.addEventListener('keydown', (ev) => {
    if (ev.code === "Space") {
        reportNext = true;
    }
});


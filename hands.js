function calcWAspect(w0, h0, w1, h1) {
    const woh = w0 / h0;
    const how = h0 / w0;

    const hwar = w1 * how;
    const whar = h1 * woh;

    console.log(`Original ${w0} x ${h0}, Want ${w1} x ${h1}`)

    if (hwar > h1) {
        return [whar, h1]
    } else {
        return [w1, hwar];
    }
}

window.exercise = null;

let reportNext = false;

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
            // reportNext = false;
        }

        if (results.multiHandLandmarks) {
            results.multiHandLandmarks.forEach((landmarks, i) => {
                drawConnectors(
                    canvasCtx, landmarks, HAND_CONNECTIONS,
                    { color: results.multiHandedness[i].index == 12 ? '#00FF00' : '#a3a300', lineWidth: 5 }
                );
                drawLandmarks(
                    canvasCtx, landmarks,
                    { color: results.multiHandedness[i].index == 0 ? '#FF0000' : '00b5b5', lineWidth: 2 }
                );
            });
        }
        if (window.exercise !== null) {
            window.exydata = window.exercise.onData(
                window.exydata,
                results,
                canvasCtx,
                () => {
                    if (window.elapsedTime !== -1) {
                        return;
                    }

                    window.elapsedTime = 0;
                    window.lastDate = Date.now();
                    document.querySelector('.timer').textContent = "0";
                },
                () => {
                    if (window.elapsedTime === null) {
                        return;
                    }
                    const nDate = Date.now();
                    window.elapsedTime += Date.now() - window.lastDate;
                    document.querySelector('.timer').textContent = Math.floor(window.elapsedTime / 1000).toString();
                    if (window.elapsedTime >= 4000) {
                        // TODO FINISH EXERCISE
                        window.exercise = null;
                        window.exercises = window.exercises.slice(1);
                        window.loadExercises(window.exercises);
                        window.elapsedTime = -1;
                        document.querySelector('.timer').textContent = "";
                    }
                }
            )
            window.lastDate = Date.now();
        }
        canvasCtx.restore();
    }

    window.exercises = [
        {
            name: "Exercise 1 - 1",
            setup: () => {
                return { stT: false };
            },
            onData: (sData, results, canvas, startTimer, tickTimer) => {
                const matchData = {
                    "multiHandLandmarks": [
                        [
                            {
                                "x": 0.3900805413722992,
                                "y": 0.6468449831008911,
                                "z": 3.0274867413027096e-7
                            },
                            {
                                "x": 0.4443388283252716,
                                "y": 0.6188702583312988,
                                "z": -0.023054873570799828
                            },
                            {
                                "x": 0.4804697334766388,
                                "y": 0.5578715801239014,
                                "z": -0.027290578931570053
                            },
                            {
                                "x": 0.491191565990448,
                                "y": 0.49413803219795227,
                                "z": -0.029928604140877724
                            },
                            {
                                "x": 0.48649415373802185,
                                "y": 0.44447124004364014,
                                "z": -0.03193499147891998
                            },
                            {
                                "x": 0.45456618070602417,
                                "y": 0.4600518047809601,
                                "z": -0.0002268506068503484
                            },
                            {
                                "x": 0.46292844414711,
                                "y": 0.388904333114624,
                                "z": -0.010542819276452065
                            },
                            {
                                "x": 0.4646134376525879,
                                "y": 0.34530413150787354,
                                "z": -0.02285051718354225
                            },
                            {
                                "x": 0.46553829312324524,
                                "y": 0.3060254454612732,
                                "z": -0.03226938843727112
                            },
                            {
                                "x": 0.42462530732154846,
                                "y": 0.44906097650527954,
                                "z": 0.0015071125235408545
                            },
                            {
                                "x": 0.43395617604255676,
                                "y": 0.3689350485801697,
                                "z": -0.006734400521963835
                            },
                            {
                                "x": 0.4383533000946045,
                                "y": 0.31755292415618896,
                                "z": -0.01906067505478859
                            },
                            {
                                "x": 0.4424627721309662,
                                "y": 0.27544352412223816,
                                "z": -0.028628168627619743
                            },
                            {
                                "x": 0.3948420584201813,
                                "y": 0.4524485170841217,
                                "z": -0.001179100596345961
                            },
                            {
                                "x": 0.4034399390220642,
                                "y": 0.3764898180961609,
                                "z": -0.011722502298653126
                            },
                            {
                                "x": 0.4103652536869049,
                                "y": 0.32948052883148193,
                                "z": -0.022441809996962547
                            },
                            {
                                "x": 0.4173629581928253,
                                "y": 0.29039111733436584,
                                "z": -0.029854292050004005
                            },
                            {
                                "x": 0.363431453704834,
                                "y": 0.4678651690483093,
                                "z": -0.006553268525749445
                            },
                            {
                                "x": 0.36896011233329773,
                                "y": 0.40657851099967957,
                                "z": -0.01745370775461197
                            },
                            {
                                "x": 0.37550273537635803,
                                "y": 0.36938217282295227,
                                "z": -0.02344500459730625
                            },
                            {
                                "x": 0.3844633996486664,
                                "y": 0.3344074487686157,
                                "z": -0.02745777554810047
                            }
                        ]
                    ],
                    "multiHandedness": [
                        {
                            "index": 0,
                            "score": 0.98046875,
                            "label": "Left"
                        }
                    ]
                }

                const differ = (a, b) => {
                    const abx = a.x - b.x;
                    const aby = a.y - b.y;
                    const abz = a.z - b.z;
                    return Math.sqrt(abx * abx + aby * aby + abz * abz);
                }
                
                drawConnectors(
                    canvas, matchData.multiHandLandmarks[0], HAND_CONNECTIONS,
                    { color: '#eeeeee', lineWidth: 1 }
                )
                drawLandmarks(
                    canvas, matchData.multiHandLandmarks[0],
                    { color: '#aeae00', lineWidth: 2 }
                );

                if (!sData.stT) {
                    let diff;


                    if (results.multiHandedness.length === 0) {
                        // continue
                        return sData;
                    } else if (results.multiHandedness.length === 1) {
                        let useable;
                        if (results.multiHandedness[0].index === matchData.multiHandedness[0].index) {
                            diff = matchData.multiHandLandmarks[0].reduce((acc, v, i) => {
                                return acc + differ(v, matchData.multiHandLandmarks[0][i]);
                            }, 0);
                            if (reportNext) {
                                console.log(matchData.multiHandLandmarks[0]);
                                reportNext = false;
                            }

                            if (diff < 1.5) {
                                // good
                                startTimer();
                                return { stT: true };
                            }
                        }
                    } else {
                        return sData;
                    }


                    return sData;
                } else {
                    let totalDiff;
                    if (results.multiHandLandmarks.length === 0) {
                        return sData;
                    }
                    else if (results.multiHandLandmarks.length === 1) {
                        totalDiff = [[4, 8], [8, 12], [12, 16], [16, 20]].reduce((acc, [a, b]) => {
                            return acc + differ(results.multiHandLandmarks[0][a], results.multiHandLandmarks[0][b]);
                        }, 0);

                        if (totalDiff > 0.45) {
                            tickTimer();
                            return sData;
                        }
                    } else {
                        return sData;
                    }
                }

                return sData;
            }
        },
        {
            name: "Exercise 1 - 2",
            setup: () => {
                return { stT: false };
            },
            onData: (sData, results, canvas, startTimer, tickTimer) => {
                const matchData = {
                    "multiHandLandmarks": [
                        [
                            {
                                "x": 0.6980484127998352,
                                "y": 0.6542544364929199,
                                "z": 2.422156626380456e-7
                            },
                            {
                                "x": 0.6436998248100281,
                                "y": 0.631500244140625,
                                "z": -0.017498519271612167
                            },
                            {
                                "x": 0.6092789173126221,
                                "y": 0.5696727633476257,
                                "z": -0.02201741375029087
                            },
                            {
                                "x": 0.6023346185684204,
                                "y": 0.5063103437423706,
                                "z": -0.02544431947171688
                            },
                            {
                                "x": 0.6041932702064514,
                                "y": 0.4566510021686554,
                                "z": -0.02787688933312893
                            },
                            {
                                "x": 0.6394553780555725,
                                "y": 0.47357648611068726,
                                "z": 0.0008983416482806206
                            },
                            {
                                "x": 0.6348626017570496,
                                "y": 0.4035511016845703,
                                "z": -0.008039020001888275
                            },
                            {
                                "x": 0.6345711946487427,
                                "y": 0.36111873388290405,
                                "z": -0.018998898565769196
                            },
                            {
                                "x": 0.6364936232566833,
                                "y": 0.32334524393081665,
                                "z": -0.027930157259106636
                            },
                            {
                                "x": 0.6715337038040161,
                                "y": 0.4649263620376587,
                                "z": -0.0006086971843615174
                            },
                            {
                                "x": 0.6660349369049072,
                                "y": 0.38587015867233276,
                                "z": -0.006307811941951513
                            },
                            {
                                "x": 0.6634282469749451,
                                "y": 0.3381105959415436,
                                "z": -0.015483214519917965
                            },
                            {
                                "x": 0.661156952381134,
                                "y": 0.2979125380516052,
                                "z": -0.023437893018126488
                            },
                            {
                                "x": 0.6999814510345459,
                                "y": 0.47132250666618347,
                                "z": -0.0061480081640183926
                            },
                            {
                                "x": 0.6968104243278503,
                                "y": 0.398440420627594,
                                "z": -0.013601081445813179
                            },
                            {
                                "x": 0.6925479769706726,
                                "y": 0.3535233736038208,
                                "z": -0.02011752501130104
                            },
                            {
                                "x": 0.688061535358429,
                                "y": 0.3147728741168976,
                                "z": -0.026083536446094513
                            },
                            {
                                "x": 0.73040771484375,
                                "y": 0.4884698987007141,
                                "z": -0.014222540892660618
                            },
                            {
                                "x": 0.7263481020927429,
                                "y": 0.4311313331127167,
                                "z": -0.021715564653277397
                            },
                            {
                                "x": 0.7216776609420776,
                                "y": 0.39575400948524475,
                                "z": -0.024663057178258896
                            },
                            {
                                "x": 0.716163694858551,
                                "y": 0.3624591827392578,
                                "z": -0.02750401385128498
                            }
                        ],
                    ],
                    "multiHandedness": [
                        {
                            "index": 1,
                            "score": 0.9686279296875,
                            "label": "Right"
                        },
                    ]
                }

                const differ = (a, b) => {
                    const abx = a.x - b.x;
                    const aby = a.y - b.y;
                    const abz = a.z - b.z;
                    return Math.sqrt(abx * abx + aby * aby + abz * abz);
                }
                
                drawConnectors(
                    canvas, matchData.multiHandLandmarks[0], HAND_CONNECTIONS,
                    { color: '#eeeeee', lineWidth: 1 }
                )
                drawLandmarks(
                    canvas, matchData.multiHandLandmarks[0],
                    { color: '#aeae00', lineWidth: 2 }
                );

                if (!sData.stT) {
                    let diff;


                    if (results.multiHandedness.length === 0) {
                        // continue
                        return sData;
                    } else if (results.multiHandedness.length === 1) {
                        let useable;
                        if (results.multiHandedness[0].index === matchData.multiHandedness[0].index) {
                            diff = matchData.multiHandLandmarks[0].reduce((acc, v, i) => {
                                return acc + differ(v, matchData.multiHandLandmarks[0][i]);
                            }, 0);
                            if (reportNext) {
                                console.log(matchData.multiHandLandmarks[0]);
                                reportNext = false;
                            }

                            if (diff < 1.5) {
                                // good
                                startTimer();
                                return { stT: true };
                            }
                        }
                    } else {
                        return sData;
                    }


                    return sData;
                } else {
                    let totalDiff;
                    if (results.multiHandLandmarks.length === 0) {
                        return sData;
                    }
                    else if (results.multiHandLandmarks.length === 1) {
                        totalDiff = [[4, 8], [8, 12], [12, 16], [16, 20]].reduce((acc, [a, b]) => {
                            return acc + differ(results.multiHandLandmarks[0][a], results.multiHandLandmarks[0][b]);
                        }, 0);

                        if (totalDiff > 0.45) {
                            tickTimer();
                            return sData;
                        }
                    } else {
                        return sData;
                    }
                }

                return sData;
            }
        },
    ];

    window.loadExercises = (exer) => {
        if (exer.length === 0) {
            // DO SOMETHING
            return;
        }

        const exprList = document.querySelector('.exer-list-holder');
        if (exprList !== null) {
            exprList.innerHTML = "";

            setTimeout(() => {
                const tt = document.querySelector("#exer-temp");
                exer.forEach((e, i) => {
                    const q = tt.content.cloneNode(true);
                    q.querySelector('#name').textContent = e.name;
                    setTimeout(() => exprList.appendChild(q), 0);
                });

                const exercise = exer[0];
                const data = exercise.setup();

                window.exercise = exercise;
                window.exydata = data;
                window.elapsedTime = -1;
                window.lastTime = Date.now();
            }, 0)
        }
    }

    window.loadExercises(window.exercises);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            videoElement.srcObject = stream;
            // videoElement.play();
            const { width: vWidth, height: vHeight } = stream.getTracks()[0].getSettings();

            let hands = null;
            window.camera = null;

            let lastW = null; lastH = null;

            const createHands = () => {
                hands = new Hands({
                    locateFile: (file) => {
                        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
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

                lastW = width;
                lastH = height;

                const [aWidth, aHeight] = calcWAspect(vWidth, vHeight, width, height);
                console.log(`Canvas will be ${aWidth} x ${aHeight}`);

                if (window.camera !== null) {
                    window.camera.stop();
                    window.oldCamera = window.camera;
                }

                canvasElement.width = aWidth;
                canvasElement.height = aHeight;
                canvasElement.style.width = `${aWidth}px`;
                canvasElement.style.height = `${aHeight}px`;

                setTimeout(() => {
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
                        setTimeout(() => {
                            console.log('Stopping loading');
                            document.body.classList.remove('still-loading');
                            document.body.classList.add('fade-loading');
                            setTimeout(() => {
                                document.body.classList.remove('fade-loading');
                            }, 200);
                        }, 0);
                    }
                }, 0);
            }

            videoElement.addEventListener('resize', redoCamera);

            redoCamera({ target: videoElement });
        });
});

document.addEventListener('keydown', (ev) => {
    if (ev.code === "Space") {
        reportNext = true;
    }
});
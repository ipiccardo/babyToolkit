// import React, { useRef, useEffect, useState } from "react";
// import { View, Button } from "react-native";
// import { mediaDevices, RTCView, RTCPeerConnection } from "react-native-webrtc";

// const VideoStream = () => {
//     const [stream, setStream] = useState<MediaStream | null>(null);

//     useEffect(() => {
//         const startStream = async () => {
//             try {
//                 const localStream = await mediaDevices.getUserMedia({
//                     video: true,
//                     audio: true,
//                 });
//                 setStream(localStream as unknown as MediaStream);
//             } catch (error) {
//                 console.error("Error obteniendo cámara/micrófono:", error);
//             }
//         };

//         startStream();

//         return () => {
//             stream?.getTracks().forEach(track => track.stop());
//         };
//     }, []);

//     return (
//         <View className="flex-1 items-center justify-center bg-black">
//             <RTCView streamURL={(stream as any).toURL()} className="w-full h-full" />

//         </View>
//     );
// };

// export default VideoStream;

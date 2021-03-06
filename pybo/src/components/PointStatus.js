import { VStack, HStack, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";

const getRequest=(jsons)=>{
    return{
        method:'POST',
        header:{
            'Content-Type':'application/json',
            "Access-Control-Allow-Origin":"*",
            'Access-Control-Allow-Headers':"*"                
        },
        body:JSON.stringify(jsons)
    }
}

function PointStatus() {
    const [pointArr, setPointArr] = useState([]);
    const {account} = useWeb3React();

    useEffect(() => {
        //username를 생성하는 부분이 완성되면, 아래 fortest을 지우고 현재 로그인된 사용자의 username을 넣으면 됩니다. (성민)
        let requestOpt = getRequest({"username":account});
        fetch("http://localhost:5000/api/userInfo", requestOpt)
            .then((response) => response.json())
            .then((jsons) => {
                setPointArr(pointArr.concat(jsons.pointA,jsons.pointB,jsons.pointC,jsons.pointD));
            });
    }, [])

    const [isLessThan1195] = useMediaQuery("(max-width:1195px)");
    return (
        <VStack
            borderRadius={15}
            bg="white"
            p={10}
            align="flex-start"
            h="355px"
            w={isLessThan1195 ? "full" : "45%"}
            m={3}
        >
            <Text fontSize="3xl" fontWeight="700">
                포인트 현황
            </Text>
            <VStack spacing={10} w="full">
                <HStack w="full" justify="space-between">
                    <Text fontSize="lg">Service A</Text>
                    <Text fontSize="lg">{pointArr[0]}</Text>
                </HStack>
                <HStack w="full" justify="space-between">
                    <Text fontSize="lg">Service B</Text>
                    <Text fontSize="lg">{pointArr[1]}</Text>
                </HStack>
                <HStack w="full" justify="space-between">
                    <Text fontSize="lg">Service C</Text>
                    <Text fontSize="lg">{pointArr[2]}</Text>
                </HStack>
                <HStack w="full" justify="space-between">
                    <Text fontSize="lg">Service D</Text>
                    <Text fontSize="lg">{pointArr[3]}</Text>
                </HStack>
            </VStack>
        </VStack>
    );
}

export default PointStatus;

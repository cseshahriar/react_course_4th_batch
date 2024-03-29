import React from 'react';
import axios from 'axios';

import { useQuery } from 'react-query'
import {Container, Flex, Grid, Heading, Spinner, Stack, Text, useToast} from "@chakra-ui/react";
import {useParams, useNavigate} from "react-router-dom";
import {fetchPost} from "../api";
import PostCreat from "./PostCreat";

const Post = () => {
    const {id} = useParams();
    const toast = useToast();

    const { isLoading, error, data } = useQuery(
        ['post', id],
        () => fetchPost(id),
    )

    if (error) return toast({status: "error", title: error.message});

    return (
        <Container maxW="1300px" mt="4">
            <>
                {
                    isLoading ?
                        <Grid placeItems="center" height="100vh"><Spinner/></Grid>
                        : error
                            ?  <Grid placeItems="center" height="100vh">{error}</Grid>
                            : (
                                <>
                                    <PostCreat isUpdate={true} id={data.data.id} />
                                    {
                                        <Stack key={data.data.id} mb="4" mt="2" p="4" boxShadow="md" borderRadius="x1" border="1px solid #ccc">
                                            <Flex justify="space-between">
                                                <Text>User Id: { data.data.user_id }</Text>
                                                <Text>Post Id: { data.data.id } </Text>
                                            </Flex>
                                            <Heading>{ data.data.title }</Heading>
                                            <Text>{ data.data.body }</Text>
                                        </Stack>
                                    }
                                </>
                            )
                }
            </>
        </Container>
    );
};

export default Post;
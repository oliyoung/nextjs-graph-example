'use client';

import {
    PaginationItems,
    PaginationNextTrigger,
    PaginationPrevTrigger,
    PaginationRoot,
} from "@/components/ui/pagination"
import { HStack, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Pagination = ({ currentPage, pageCount }: { currentPage: number, pageCount: number }) => {
    const [url, setUrl] = useState<URL>();
    useEffect(() => {
        setUrl(new URL(window?.location?.href));
    }, [])

    if (!url) {
        return <></>
    }

    return <PaginationRoot
        pageSize={1}
        count={pageCount}
        page={currentPage}
        onPageChange={(event) => {
            url.searchParams.set('page', String(event.page));
            window.history.pushState(null, '', url.toString());
        }}
    >
        <VStack>
            <HStack>
                <PaginationPrevTrigger />
                <PaginationItems />
                <PaginationNextTrigger />
            </HStack>
        </VStack>
    </PaginationRoot >
}
export default Pagination


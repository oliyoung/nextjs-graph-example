'use client';

import {
    PaginationItems,
    PaginationNextTrigger,
    PaginationPrevTrigger,
    PaginationRoot,
} from "@/components/ui/pagination"
import { HStack, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const Pagination = ({ currentPage, pageCount }: { currentPage: Readonly<number>, pageCount: Readonly<number> }) => {
    const [url, setUrl] = useState<URL>();
    useEffect(() => {
        setUrl(new URL(window?.location?.href));
    }, [])

    if (!url || !pageCount) {
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

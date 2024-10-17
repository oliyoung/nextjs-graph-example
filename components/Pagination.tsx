'use client';

import {
    PaginationItems,
    PaginationNextTrigger,
    PaginationPageText,
    PaginationPrevTrigger,
    PaginationRoot,
} from "@/components/ui/pagination"
import { HStack, VStack } from "@chakra-ui/react";

const Pagination = ({ currentPage, pageCount }: { currentPage: number, pageCount: number }) => {
    if (!window?.location?.href) {
        return <></>
    }

    const url = new URL(window?.location?.href);

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


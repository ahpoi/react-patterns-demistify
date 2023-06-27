import { Box } from "./components/box";
import { Page, PageMainBody } from "../../components/Page";
import { Button } from "./components/button";

export const ExpOwnLibrary = () => <Page>
    <PageMainBody>
        <Box backgroundColor={'blue'} mt={{sm: 'xs', md: 'lg'}}>
            haha
            <Box backgroundColor={'blue'} mt={{sm: 'xs', md: 'lg'}}>
                haha
                <Box backgroundColor={'blue'}>
                    haha
                    <Box backgroundColor={'blue'} mt={{sm: 'xs', md: 'lg'}}>
                        haha
                    </Box>
                </Box>
            </Box>
            <Box backgroundColor={'blue'} mt={{sm: 'xs', md: 'lg'}}>
                haha
            </Box>
        </Box>
        <Button>Hello</Button>
    </PageMainBody>
</Page>

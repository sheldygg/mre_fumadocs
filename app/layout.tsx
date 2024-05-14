import {DocsLayout} from "fumadocs-ui/layout"
import {RootProvider} from "fumadocs-ui/provider"
import {Inter} from "next/font/google";
import {Metadata} from "next";
import type {ReactNode} from "react";

import {pageTree} from "./source";
import "./global.css";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Index",
};

export default function Layout({children}: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <RootProvider>
                    <DocsLayout
                        tree={pageTree}
                        nav={{
                            title: "Docs",
                        }}
                        sidebar={{
                            collapsible: false
                        }}
                    >
                        {children}
                    </DocsLayout>
                </RootProvider>
            </body>
        </html>
    );
}

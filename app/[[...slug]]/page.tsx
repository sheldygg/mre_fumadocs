import {getPage, getPages} from '@/app/source';
import type {Metadata} from 'next';
import {DocsPage, DocsBody} from "fumadocs-ui/page"
import { RollButton } from 'fumadocs-ui/components/roll-button';
import {notFound} from "next/navigation";

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
    const page = getPage(params.slug);
    if (!page) {
        return notFound();
    }

    const MDX = page.data.exports.default;
    const toc = page.data.disableToc ? undefined : page.data.exports.toc;

    return (
        <DocsPage toc={toc}>
            <RollButton/>
            <DocsBody>
                <h1>{page.data.title}</h1>
                <MDX/>
            </DocsBody>
        </DocsPage>
    );
}

export async function generateStaticParams() {
    return getPages().map((page) => ({
        slug: page.slugs,
    }));
}

export function generateMetadata({params}: { params: { slug?: string[] } }) {
    const page = getPage(params.slug);
    if (!page) {
        return {};
    }

    return {
        title: page.data.title,
        description: page.data.description,
    } satisfies Metadata;
}

import {map} from '@/.map';
import {createMDXSource, defaultSchemas} from 'fumadocs-mdx';
import {loader} from 'fumadocs-core/source';
import {z} from 'zod';
import {createElement} from "react";
import { icons } from 'lucide-react';


const frontmatterSchema = defaultSchemas.frontmatter.extend({
    disableToc: z.boolean().optional(),
});

export const {getPage, getPages, pageTree} = loader({
    baseUrl: '/',
    rootDir: '',
    source: createMDXSource(map, {schema: {frontmatter: frontmatterSchema}}),
    icon(icon) {
        if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
    },
});

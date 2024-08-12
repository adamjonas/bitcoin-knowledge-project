import TOCInline from "pliny/ui/TOCInline"
import BlogNewsletterForm from "pliny/ui/BlogNewsletterForm"
import type { MDXComponents } from "mdx/types"
import CustomLink from "../markdown-ui/Link"
import Image from "../markdown-ui/Image"
import SvgDisplay from "./script-visualizer/SvgDisplay"
import ScriptStackVisualizer from "./script-visualizer/scriptVisualizer"
import TransactionsDisplay from "./transaction-serializer/TransactionDisplay"
import CodeEditor from "./CodeEditor"
import { QuickLink, QuickLinks } from "./QuickLinks"
import ExpandableAlert from "./expandable-alert"

export const components: MDXComponents = {
    Image,
    CustomLink,
    TOCInline,
    BlogNewsletterForm,
    ExpandableAlert,
    ScriptStackVisualizer,
    SvgDisplay,
    CodeEditor,
    TransactionsDisplay,
    QuickLinks,
    QuickLink
}

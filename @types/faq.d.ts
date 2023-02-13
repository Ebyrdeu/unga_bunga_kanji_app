import {type NextPage} from "next";

export type AccordionItemCustomProps = NextPage<Record<"label" | "placeholder" | "value", string>>;
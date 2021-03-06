import { graphql } from "gatsby";

export const NavMenu = graphql`
  fragment NavMenu on SanityNavigationMenu {
    _rawItems(resolveReferences: { maxDepth: 10 })
  }
`;

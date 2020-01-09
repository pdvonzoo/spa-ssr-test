import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 7rem 3rem;
  width: 70%;
  margin-left: auto;
`;

const Section = styled.section`
  white-space: pre-wrap;
  font-size: 1.1rem;
  line-height: 2rem;
`;

export default ({ description, authorIntroContent, bookIntroContent, tableOfContentsContent }) => {
    return (
        <Container>
            <Section>
                {description}
            </Section>
            <Section>
                {authorIntroContent}
            </Section>
            <Section>
                {bookIntroContent}
            </Section>
            <Section>
                {tableOfContentsContent}
            </Section>
        </Container>)
}
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  padding: 7rem 3rem;
  width: 70%;
  margin-left: auto;
  @media (max-width: 1000px) {
    padding: 5rem 2rem;
    margin-left: 0;
    width: 100%;
  }
`;
const Section = styled.section`
  white-space: pre-wrap;
  font-size: 1.1rem;
  line-height: 2rem;
`;
export default ({ authorIntroContent, bookIntroContent, tableOfContentsContent }) => {
    return (
        <Container>
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
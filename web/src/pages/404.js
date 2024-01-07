import React from 'react';
import { Link } from 'gatsby';
import PageSpace from '../components/PageSpace';
import ParagraphText from '../components/typography/ParagraphText';
import { SectionTitle } from '../components/typography/Title';
import { NotFoundPageStyles } from '../styles/NotFoundPageStyles';

/* try removing braces on Go Back To to see what happens */

function NotFoundPage() {
  return (
    <PageSpace>
      <div className="container">
        <NotFoundPageStyles>
          <SectionTitle className="title">Server Response : 404</SectionTitle>
          <ParagraphText>
            Error Type - The page you are looking for is not found. <br /> Go
            Back to{' '}
            <Link to="/" className="link">
              Home Page
            </Link>
            {/* add more Links */}
          </ParagraphText>
        </NotFoundPageStyles>
      </div>
    </PageSpace>
  );
}

export default NotFoundPage;
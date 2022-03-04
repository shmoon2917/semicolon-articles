import { Typos } from 'components/Typo';
import { format, parse } from 'date-fns';
import { STYLES } from 'services/constants';
import { Article } from 'services/types';
import styled from 'styled-components';
import { SpaceX } from 'styles/theme';

type LatestArticleProps = Omit<Article, 'slug'>;

const LatestArticle: React.FC<LatestArticleProps> = ({ category, date, title }: LatestArticleProps) => {
  return (
    <LatestArticleContainer>
      <DescriptionArea>
        <Typos.Label type="large" style={{ color: STYLES.color.dark3 }}>
          {category}
        </Typos.Label>
        <Divider />
        <Typos.Label type="large" style={{ color: STYLES.color.dark3 }}>
          {format(new Date(date), 'yyyy년 M월 d일')}
        </Typos.Label>
      </DescriptionArea>
      <Typos.Heading5>{title}</Typos.Heading5>
    </LatestArticleContainer>
  );
};

export default LatestArticle;

const LatestArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 15px 0;

  &:hover ${Typos.Heading5} {
    text-decoration: underline;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 8px;
  background: ${STYLES.color.light0};
`;

const DescriptionArea = styled.div`
  display: inline-flex;
  align-items: center;

  ${SpaceX(8)}
`;

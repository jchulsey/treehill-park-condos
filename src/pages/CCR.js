import TLDR from './articles/TLDR';
import ArticleI from './articles/ArticleI';
import ArticleII from './articles/ArticleII';
import ArticleIII from './articles/ArticleIII';
import ArticleIV from './articles/ArticleIV';
import ArticleV from './articles/ArticleV';
import ArticleVI from './articles/ArticleVI';
import ArticleVII from './articles/ArticleVII';
import ArticleVIII from './articles/ArticleVIII';
import ArticleIX from './articles/ArticleIX';
import ArticleX from './articles/ArticleX';

export default function CCR() {
    return (
        <div className="ccr">
                <TLDR />
                <ArticleI />
                <ArticleII />
                <ArticleIII />
                <ArticleIV />
                <ArticleV />
                <ArticleVI />
                <ArticleVII />
                <ArticleVIII />
                <ArticleIX />
                <ArticleX />
            <div className='grid-container'>
                
            </div>   
        </div>
    );
}
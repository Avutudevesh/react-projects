import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail 
            author="Sam Dods" 
            timeAgo="Today at 4.55 pm" 
            userComment="Nice Blog!" 
            userAvatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
            author="Jack Mark" 
            timeAgo="Today at 2.19 pm" 
            userComment="Liked It!" 
            userAvatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
            author="Dan Shaw" 
            timeAgo="Today at 1.17 am" 
            userComment="How can I contack you?" 
            userAvatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
            author="James Scoot" 
            timeAgo="Yesterday at 4.55 pm" 
            userComment="Nice Writting" 
            userAvatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
            author="Georgie Efimove" 
            timeAgo="Today at 4.55 pm" 
            userComment="Love it" 
            userAvatar={faker.image.avatar()}/>
            </ApprovalCard>

        </div>
    );
}

ReactDom.render(<App />, document.querySelector('#root'));
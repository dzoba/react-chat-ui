import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import Message, { Props } from "../src/message"

const meta: Meta = {
  title: 'Message',
  component: Message,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const date = new Date()
const minutesAgoDate = new Date(date)
const hoursAgoDate = new Date(date)
const daysAgoDate = new Date(date)
const monthsAgoDate = new Date(date)



minutesAgoDate.setMinutes(minutesAgoDate.getMinutes() - 10)
hoursAgoDate.setHours(hoursAgoDate.getHours() - 3)
daysAgoDate.setDate(daysAgoDate.getDate() - 10)
monthsAgoDate.setMonth(monthsAgoDate.getMonth() - 2)

const LeftTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="incoming"
  text="Hello World!"
  date={date}
/>

const IncomingWithLinkTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="incoming"
  text="Hello World! visit https://google.com to begin searching"
  date={minutesAgoDate}

/>

const OutgoingWithLinkTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="outgoing"
  text="Hello World! visit https://google.com to begin searching"
  date={hoursAgoDate}

/>



const RightTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="outgoing"
  text="Hello World!"
  date={daysAgoDate}

/>


const LoadingTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  loading={true}
  themeColor='#6ea9d7'
  type="outgoing"
  text="Hello World!"
  date={monthsAgoDate}

/>

const WithAvatarTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="incoming"
  showAvatar={true}
  date={date}
  text="Hello World! adfnjflejkrngelrwgnerljgnerlgnewrlgejnurglwejrnglewrkjgnlewrgnljner"
/>

const ImageContentTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="incoming"
  showAvatar={true}
  date={minutesAgoDate}
  media={{
    type: "image",
    url: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
/>

const FileContentTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="incoming"
  showAvatar={true}
  date={hoursAgoDate}

  media={{
    type: "file",
    url: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    size: "2 mb"

  }} />

const VideoContentTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  date={daysAgoDate}

  themeColor='#6ea9d7'
  type="incoming"
  showAvatar={true}
  media={{
    type: "video",
    url: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    size: "2 mb"
  }} />

const GifContentTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  date={monthsAgoDate}

  themeColor='#6ea9d7'
  type="incoming"
  showAvatar={true}
  media={{
    type: "gif",
    url: "https://media2.giphy.com/media/sugyoDHOvvFVawa7qZ/giphy.gif?cid=ecf05e47c6mrta3sn8ol5nv1hgz6eu8jew3b2v0iya4ckbmv&ep=v1_gifs_gifId&rid=giphy.gif&ct=s",
    size: "2 mb"
  }} />

const WithHeaderTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="incoming"
  date={date}
  showAvatar={true}
  showHeader={true}
  text="Hello World!"
/>

const LastIncomingTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="incoming"
  date={minutesAgoDate}
  showAvatar={true}
  last={true}
  text="Hello World!"
/>


const SingleIncomingTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="incoming"
  showAvatar={true}
  single={true}
  date={hoursAgoDate}
  text="Hello World!"
/>



const SingleOutgoingTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="outgoing"
  single
  date={daysAgoDate}
  text="Hello World! adfnjflejkrngelrwgnerljgnerlgnewrlgejnurglwejrnglewrkjgnlewrgnljner"
/>

const LastOutgoingTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="outgoing"
  last
  date={monthsAgoDate}
  text="Hello World! adfnjflejkrngelrwgnerljgnerlgnewrlgejnurglwejrnglewrkjgnlewrgnljner"
/>

const OutgoingImageContentTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="outgoing"
  date={date}
  showAvatar={true}
  media={{
    type: "image",
    url: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }} />

const OutgoingFileContentTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="outgoing"
  date={minutesAgoDate}
  showAvatar={true}
  media={{
    type: "file",
    url: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    size: "2 mb"
  }} />

const OutgoingVideoContentTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  date={date}
  themeColor='#6ea9d7'
  type="outgoing"
  showAvatar={true}
  media={{
    type: "video",
    url: "https://www.youtube.com/watch?v=dfhbmlm4emI",
    size: "2 mb"
  }}
/>


const OutgoingGifContentTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  date={daysAgoDate}
  themeColor='#6ea9d7'
  type="outgoing"
  showAvatar={true}
  media={{
    type: "gif",
    url: "https://media2.giphy.com/media/sugyoDHOvvFVawa7qZ/giphy.gif?cid=ecf05e47c6mrta3sn8ol5nv1hgz6eu8jew3b2v0iya4ckbmv&ep=v1_gifs_gifId&rid=giphy.gif&ct=s",
    size: "2 mb"
  }}
/>


// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

export const Incoming = LeftTemplate.bind({});
export const IncomingWithLink = IncomingWithLinkTemplate.bind({});
export const IncomingWithAvatar = WithAvatarTemplate.bind({});
export const IncomingWithHeader = WithHeaderTemplate.bind({});
export const SingleIncoming = SingleIncomingTemplate.bind({});
export const LastIncoming = LastIncomingTemplate.bind({});
export const IncomingImageContent = ImageContentTemplate.bind({});
export const IncomingFileContent = FileContentTemplate.bind({});
export const IncomingVideoContent = VideoContentTemplate.bind({});
export const IncomingGifContent = GifContentTemplate.bind({});



export const Outgoing = RightTemplate.bind({});
export const SingleOutgoing = SingleOutgoingTemplate.bind({});
export const LastOutgoing = LastOutgoingTemplate.bind({});
export const SendMessageLoading = LoadingTemplate.bind({});
export const OutgoingWithLink = OutgoingWithLinkTemplate.bind({});
export const OutgoingImageContent = OutgoingImageContentTemplate.bind({});
export const OutgoingFileContent = OutgoingFileContentTemplate.bind({});
export const OutgoingVideoContent = OutgoingVideoContentTemplate.bind({});
export const OutgoingGifContent = OutgoingGifContentTemplate.bind({});









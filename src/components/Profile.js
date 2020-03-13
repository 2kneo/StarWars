import React, { Component } from "react";
import Banner from "./banner/Banner";
import WrapperUser from "./user/WrapperUser";
import MyPosts from "./profile/myPosts/MyPosts";
import BoxMessage from "./profile/boxMessage/BoxMessage";
import State from "./data/State";
import { Col, Row } from "react-bootstrap";
import PostItem from "./profile/postItem/PostItem";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPost: "",
      userListPost: State.posts
    };
    this.addPost = this.addPost.bind(this);
  }

  addPost(value) {
    const { userListPost } = this.state;

    this.setState({
      addPost: value
    });

    const itemPost = userListPost.find(item => {
      if (item.id === this.props.userIdData.id) {
        return item;
      }
    });

    var days = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота"
    ];
    var months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь"
    ];
    var myDate = new Date();
    var hour = myDate.getHours();
    var minute = myDate.getMinutes();
    var second = myDate.getSeconds();
    var fullDate =
      "Сегодня: " +
      myDate.getDate() +
      " " +
      months[myDate.getMonth()] +
      " " +
      myDate.getFullYear() +
      ", " +
      days[myDate.getDay()] +
      "," +
      hour +
      ":" +
      minute +
      ":" +
      second;

    const newPost = {
      id: itemPost.post.length + 1,
      date: fullDate,
      time: "12.21",
      text: value
    };
    itemPost.post.push(newPost);
  }

  render() {
    return (
      <>
        {/* <Banner />*/}
        <WrapperUser userIdData={this.props.userIdData} />
        <Row>
          <Col xl={6}>
            <BoxMessage postData={this.addPost} />
          </Col>
        </Row>
        <MyPosts userIdData={this.props.userIdData} />
      </>
    );
  }
}

export default Profile;

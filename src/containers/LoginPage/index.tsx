import React, { useEffect } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { ILoginDTO } from "./interfaces";
import * as authActions from "../../redux/actions/auth.action";

import "./index.scss";
import { IStore } from "../../redux/interfaces";
import { authSelector } from "../../redux/selectors/auth.selector";
import { useHistory } from "react-router";

type IDispatchProps = ReturnType<typeof mapDispatchToProps>;
type IMapStateProps = ReturnType<typeof mapStateToProps>;

type IProps = IDispatchProps & IMapStateProps;

const LoginPage: React.FC<IProps> = (props: IProps) => {
  const history = useHistory();

  const { isAuthenticated } = props.auth;

  useEffect(() => {
    if (isAuthenticated) {
      history.replace("/");
    }
  }, [isAuthenticated]);

  const onLoginFormSubmit = ({ username, password }: ILoginDTO) => {
    props.login({ username, password });
  };

  return (
    <div id="admin-login-page">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onLoginFormSubmit}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state: IStore) => ({
  auth: authSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      login: authActions.login.invoke,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

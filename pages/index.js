import { Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";

export default function Index() {
  return (
    <Result
      icon={<SmileOutlined />}
      title="Well done, you are all set up"
    />
  );
}

declare module "*.png" {
    const value: any;
    export default value;
  }
  
  declare module "*.jpg" {
    const value: any;
    export default value;
  }
  
  declare module "*.jpeg" {
    const value: any;
    export default value;
  }
  declare module "react-native-vector-icons/FontAwesome" {
    import { IconProps } from "react-native-vector-icons/Icon";
    import { Component } from "react";
    
    export default class FontAwesome extends Component<IconProps> {}
}
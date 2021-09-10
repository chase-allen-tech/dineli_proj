import React, {Component} from "react";
import {Button, Input, Layout} from "element-react";
import {AiFillDownCircle, AiFillUpCircle} from "react-icons/ai";

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
            pageURL: 'https://realt.co/',
            referralURL: 'https://realt.co/ref/Facilitator/',
            referralLink: false,
            generateReferralURL: false,
        }
    }

    handleReferralLink = () => {
        this.setState({
            referralLink: !this.state.referralLink
        })

    }

    handleGenerateURL = () => {
        this.setState({
            generateReferralURL: true
        })
    }

    handleCheck = () => {
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {
        return <>
            <Layout.Row style={{border: "1px solid #03ffa4"}}>
                <Layout.Col className="d-font-bold d-text-36" span="24"
                            style={{background: "#03ffa4", padding: "15px 0 15px 20px"}}>
                    <div className="grid-content bg-purple-dark">Profile Settings</div>
                </Layout.Col>
                <div style={{margin: "90px 20px 20px 20px"}}>
                    <span className="d-font-bold d-highlight d-text-28">Notification Settings</span>
                </div>
                <div style={{margin: "10px 20px 20px 20px"}} className='d-white affiliate-settings-checkbox'>
                    <input type={'checkbox'} checked={this.state.checked} onClick={this.handleCheck}/>&nbsp;Enable New
                    Referral Notifications
                </div>
                <div style={{margin: "0px 20px 10px 20px", border: "1px solid #03ffa4", padding: 20}}>
                    <div onClick={this.handleReferralLink} className="d-highlight d-text-28 d-font-bold"
                         style={{margin: "0.5% 0"}}>What is a Custom Slug? &nbsp;
                        {
                            this.state.referralLink ? <AiFillUpCircle/> : <AiFillDownCircle/>
                        }
                    </div>
                    {
                        this.state.referralLink && <>
                            <div>
                                <span className="d-font-book d-white">When you share an affiliate link to RealT, you'll
                                    see something like /ref/your_username at the end of the URL. The your_username part is
                                    your 'slug', the short name that tells realt.co to connect the link to your affiliate
                                    account.
                                </span>
                            </div>
                            <div className="d-white">
                                <span>If you don't want to use your username as part of your link URL, you can choose a
                                    Custom Slug here instead. This could be almost anything you want — your business name,
                                    a catchy phrase, or a call to action.
                                </span>
                            </div>
                            <div>
                                <span className="d-font-bold d-white">If you choose to use a Custom Slug, there are three
                                    things you have to keep in mind:
                                </span>
                            </div>
                            <ul className="d-white">
                                <li>Your Custom Slug is directly associated with your account. Changing it will
                                    invalidate
                                    any links that use an old Custom Slug!
                                </li>
                                <li>Your Custom Slug must be a single string of letters, numbers, and underscores. It
                                    must
                                    contain at least one letter. It cannot match another slug or username.
                                </li>
                                <li>The URL Generator in the Affiliate URLs tab will always use your username as the
                                    slug.
                                    Simply replace your username with your Custom Slug to use it in a generated URL.
                                </li>
                            </ul>
                        </>
                    }
                </div>

                <div style={{margin: "0px 20px 10px 20px"}}>
                    <span className="d-font-bold d-highlight">Custom Slug Settings</span>
                </div>
                <Layout.Row style={{margin: "0px 20px 10px 20px"}}>
                    <Layout.Col span="12">
                        <div className="grid-content">
                            <div className="d-font-book d-white d-text-24">Custom Affiliate Slug</div>
                            <Input style={{width: "80%"}}/>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="12">
                        <div className="grid-content">
                            <div className="d-font-book d-white d-text-24">Custom Affiliate Slug</div>
                            <div style={{textAlign: "center"}}><input type={'checkbox'}/></div>
                            <div className="d-font-book d-white d-text-24">By removing your affiliate slug you
                                acknowledge
                                that any existing links using an older affiliate slug may no longer work.
                            </div>
                        </div>
                    </Layout.Col>
                </Layout.Row>
                <Layout.Row>
                    <Layout.Col span="24" style={{textAlign: "center", marginBottom: 30}}>
                        <div className="grid-content">
                            <Button style={{background: "#03ffa4", color: "black"}} className="d-font-bold"
                                    type="success" onClick="">SAVE PROFILE SETTINGS</Button>
                        </div>
                    </Layout.Col>
                </Layout.Row>

            </Layout.Row>
        </>
    }
}

export default Settings;
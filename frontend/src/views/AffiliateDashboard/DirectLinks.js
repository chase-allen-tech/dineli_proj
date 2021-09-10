import React, {Component} from "react"
import {Button, Input, Layout} from "element-react"

class DirectLinks extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout.Row style={{border: "1px solid #03ffa4"}}>
                <Layout.Col className="d-font-bold d-text-36" span="24"
                            style={{background: "#03ffa4", padding: "15px 0 15px 20px"}}>
                    <div className="grid-content bg-purple-dark">Direct Links</div>
                </Layout.Col>
                <div style={{margin: "90px 20px 20px 20px"}}>
                    <span className="d-font-book d-white">Direct links allow you to link directly to this site, from your
                        own website, without an affiliate link. Submit your domain or individual domain path below for approval.
                    </span>
                </div>
                <Layout.Row style={{margin: "0px 20px 10px 20px"}}>
                    <Layout.Col span="24">
                        <div className="grid-content">
                            <div className="d-font-book d-white d-text-24">Direct Link Domain</div>
                            <Input style={{width: "95%"}}/>
                        </div>
                    </Layout.Col>
                </Layout.Row>

                <Layout.Row>
                    <Layout.Col span="24" style={{textAlign: "center", marginBottom: 30}}>
                        <div className="grid-content">
                            <Button style={{background: "#03ffa4", color: "black"}} className="d-font-bold"
                                    type="success" onClick="">SAVE DIRECT LINKS</Button>
                        </div>
                    </Layout.Col>
                </Layout.Row>

                <div style={{width: "95%", padding: 30, margin: "0.5% 0 2% 2.5% ", border: "1px solid #03ffa4"}}>
                    <span className="d-font-bold d-highlight">You must demonstrate your ownership of the website you want to
                        register for a Direct Link.</span><br/>
                    <span className="d-font-book d-white">{`To do that, please add the following code inside your website's <head> tag:`}</span><br/>
                    <Layout.Col span="24">
                        <div className="grid-content" style={{textAlign: "center"}}>
                            <Input style={{ width: "90%", background: "darkgray"}} value={'<meta name="realt:direct_link" content="verified">'} disabled/>
                        </div>
                    </Layout.Col>

                    <span className="d-font-bold d-white">To earn referrals from your Direct Link, you must ensure:
                    </span><br/>
                    <ul className="d-white">
                        <li>The Direct Link does not open a new tab. It must point to a realt.co URL directly.
                        </li>
                        <li>The Direct Link is not opened from a bookmark or other external source. It must come directly
                            from the web domain you registered above.
                        </li>
                        <li>The Direct Link's HTML anchor tag doesn't use 'noopener' or 'noreferrer' in its 'rel' attribute.
                        </li>
                    </ul>
                    <span className="d-font-book d-white">If you're having trouble tracking Direct Link referrals from
                        visitors who use Safari or iOS, try adding the following code to your site's HTML header:</span><br/>
                    <Layout.Col span="24">
                        <div className="grid-content" style={{textAlign: "center"}}>
                            <Input style={{ width: "90%", background: "darkgray"}} value={'<meta name="referrer" content="always">'} disabled/>
                        </div>
                    </Layout.Col>
                    <span className="d-font-book d-white">And of course, for assistance, please contact us at help@realt.co!</span><br/>
                </div>
            </Layout.Row>
        );
    }
}

export default DirectLinks;
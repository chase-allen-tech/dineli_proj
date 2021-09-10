import React, {Component} from "react"
import {Dialog, Upload} from 'element-react'

class UploadImage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dialogImageUrl: '',
            dialogVisible: false,
        }
    }

    handleRemove(file, fileList) {
        this.props.changeImageData(
            fileList
                .filter(e => e !== file.response.message)
                .map(e => e.url)
        )
    }

    handleSuccess = (response, file, fileList) => {
        file.url = `${process.env.REACT_APP_API_ENDPOINT}/${response.message}`
        this.props.changeImageData([...fileList.map(e => e.url)])
    }

    handlePictureCardPreview(file) {
        this.setState({
            dialogImageUrl: file.url,
            dialogVisible: true,
        })
    }

    render() {
        const {dialogImageUrl, dialogVisible} = this.state;
        return (
            <div>
                <Upload
                    action={`${process.env.REACT_APP_API_ENDPOINT}/api/admin/image/upload`}
                    headers={{'x-access-token': JSON.parse(localStorage.getItem('user'))['accessToken']}}
                    listType="picture-card"
                    onPreview={file => this.handlePictureCardPreview(file)}
                    onRemove={(file, fileList) => this.handleRemove(file, fileList)}
                    onSuccess={this.handleSuccess}
                    fileList={[
                        // {status: "success", url: "http://localhost:8000/1625973600354_homr4-left.png"},
                        // {status: "success", url: "http://localhost:8000/1625973600354_homr4-left.png"},
                    ]}
                >
                    <i className="el-icon-plus"/>
                </Upload>
                <Dialog
                    visible={dialogVisible}
                    size="tiny"
                    onCancel={() => this.setState({dialogVisible: false})}
                >
                    <img width="100%" src={dialogImageUrl} alt=""/>
                </Dialog>
            </div>
        )
    }


}

export default UploadImage;
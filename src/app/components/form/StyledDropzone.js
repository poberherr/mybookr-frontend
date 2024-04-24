import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

import { styled, useMediaQuery, useTheme } from "@mui/material";

import { imageIcon } from "@/assets/icons";

export default function StyledDropzone() {
  const mTheme = useTheme();
  const isMobile = useMediaQuery(mTheme.breakpoints.down("md"));

  const [files, setFiles] = useState([]);

  function validator(file) {
    if (file.size > 1000000) {
      return {
        code: "size-too-large",
        message: `File size is larger than ${1} MB`,
      };
    }

    return null;
  }

  const {
    fileRejections,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 4,
    // maxSize: 1000000, // 1MB
    validator: validator,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  const thumbs = files.map((file) => (
    <ThumbsItem
      isMobile={isMobile}
      file={file}
      onLoad={() => {
        URL.revokeObjectURL(file.preview);
      }}
    />
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <ErrorsItem key={file.path}>
      <span className="file">! Error for </span>
      {file.path}

      {errors.map((e) => (
        <span className="reason" key={e.code}>
          {e.message}
        </span>
      ))}
    </ErrorsItem>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  });

  return (
    <div style={{ width: "100%" }}>
      <DropZone
        {...getRootProps({
          isFocused,
          isDragAccept,
          isDragReject,
          isDragActive,
          fileRejections,
        })}
      >
        <input {...getInputProps()} />

        {fileRejectionItems <= 0 ? (
          <>
            <img src={imageIcon} width="auto" height="64px" alt="" />

            <p style={{ marginTop: "32px" }}>
              {isDragActive ? "Drop it like it's hot!" : "Drag 4 photos here"}
            </p>
            <p>(max 1 MB each)</p>
            <p className="hint" style={{ marginTop: "32px" }}>
              Upload from your device
            </p>
          </>
        ) : (
          <>
            {fileRejectionItems}
            <p>Please fix the problem and try again.</p>
          </>
        )}
      </DropZone>
      <ThumbsContainer isMobile={isMobile}>
        {files.length > 0 ? (
          <>{thumbs}</>
        ) : (
          <>
            <ThumbsItem />
            <ThumbsItem />
            <ThumbsItem />
            <ThumbsItem />
          </>
        )}
      </ThumbsContainer>
    </div>
  );
}

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject || props.fileRejections.length > 0) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const DropZone = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Inter";
  font-size: 18px;
  color: #303030;

  padding: 64px;
  border: 1px solid ${(props) => getColor(props)};
  border-radius: 8px;
  cursor: pointer;

  & .hint {
    font-size: 12px;
    text-transform: uppercase;
    padding-bottom: 16px;
    border-bottom: 1px solid #303030;
  }
`;

const ThumbsContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => (props.isMobile ? "8px" : "16px")};

  border-radius: 8px;
  margin-top: ${(props) => (props.isMobile ? "8px" : "16px")};
`;

const ThumbsItem = styled("div")`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-image: url(${(props) => props?.file?.preview});

  width: 100%;
  height: ${(props) => (props.isMobile ? "120px" : "150px")};

  border: 1px solid #eeeeee;
  border-radius: 8px;
`;

const ErrorsItem = styled("p")`
  font-size: 16px;
  color: #303030;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0px;
  }

  & .file {
    color: #c62828;
    font-weight: 700;
    display: block;
  }

  & .reason {
    color: #c62828;
    display: block;
  }
`;

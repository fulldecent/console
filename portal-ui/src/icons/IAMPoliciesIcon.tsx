// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import * as React from "react";
import { SVGProps } from "react";

const IAMPoliciesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      className={`min-icon`}
      fill={"currentcolor"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <defs>
        <clipPath id="prefix__a">
          <path d="M0 0h256v256H0z" />
        </clipPath>
      </defs>
      <g data-name="IAM Policies" clipPath="url(#prefix__a)">
        <path
          data-name="Trazado 339"
          d="M238.026 44.559v-.074a12.563 12.563 0 00-12.75-11.864c-19.684.308-57.242-3.075-88.8-29.6a12.417 12.417 0 00-16.182-.047C88.663 29.55 51.103 32.944 31.536 32.627a12.513 12.513 0 00-12.855 11.93c-1.846 47.721-1.545 114.939 22.287 147.594 22.289 30.644 66.039 55.739 79.613 62.109a18.165 18.165 0 007.762 1.739 18.159 18.159 0 007.8-1.753c14.566-6.868 57.258-31.421 79.59-62.08 23.834-32.661 24.139-99.886 22.293-147.607zm-34.455 138.74c-20.369 27.982-61.17 51.362-73.861 57.349a3.255 3.255 0 01-2.75 0c-12.654-5.95-53.391-29.247-73.832-57.357C30.316 152.037 32.54 76.032 33.61 47.691h.279c21.967 0 60.824-4.515 94.463-31.857 33.59 27.335 72.461 31.849 94.549 31.849h.184c1.078 28.484 3.287 104.383-19.514 135.615z"
        />
        <path
          data-name="Trazado 339 - Contorno"
          d="M128.337-.095a12.648 12.648 0 018.2 3.045 123.269 123.269 0 0047.012 24.357 145.567 145.567 0 0021.651 4.2 153.2 153.2 0 0017.757 1.038c.771 0 1.549-.006 2.315-.018h.341a12.443 12.443 0 018.574 3.472 12.512 12.512 0 013.936 8.492v.079c1.846 47.733 1.542 114.978-22.316 147.667-22.359 30.7-65.061 55.244-79.628 62.112a18.164 18.164 0 01-7.839 1.763 18.186 18.186 0 01-7.8-1.748c-13.569-6.367-57.329-31.451-79.652-62.141-23.849-32.678-24.152-99.92-22.306-147.656a12.707 12.707 0 013.888-8.538 12.338 12.338 0 018.59-3.5c.16 0 .322 0 .481.009.774.013 1.565.019 2.348.019a151.784 151.784 0 0017.7-1.043 145.24 145.24 0 0021.618-4.209 123.616 123.616 0 0047.024-24.4 12.5 12.5 0 018.106-3zm94.622 32.838a153.41 153.41 0 01-17.78-1.04 145.772 145.772 0 01-21.681-4.2 123.47 123.47 0 01-47.088-24.4 12.449 12.449 0 00-8.073-3 12.3 12.3 0 00-7.979 2.951 123.819 123.819 0 01-47.1 24.436 145.446 145.446 0 01-21.648 4.215 151.971 151.971 0 01-17.723 1.045c-.784 0-1.576-.006-2.353-.019-.16-.006-.319-.009-.476-.009a12.14 12.14 0 00-8.451 3.441 12.5 12.5 0 00-3.827 8.4c-1.845 47.705-1.544 114.9 22.268 147.53 22.3 30.656 66.018 55.716 79.575 62.077a17.988 17.988 0 007.719 1.729 17.966 17.966 0 007.754-1.743c14.554-6.862 57.217-31.385 79.552-62.049 23.821-32.639 24.123-99.839 22.278-147.546v-.078a12.308 12.308 0 00-3.874-8.352 12.243 12.243 0 00-8.437-3.417h-.337c-.766.018-1.541.024-2.318.024zm-94.607-17.036l.063.051a138.835 138.835 0 0051.551 26.156 161.07 161.07 0 0023.579 4.539 167.394 167.394 0 0019.356 1.132h.28v.1c.3 7.964.61 17.617.612 28.82 0 13.686-.473 26.462-1.415 37.971-2.643 32.308-8.945 55.486-18.73 68.89-20.381 28-61.205 51.393-73.9 57.38a3.3 3.3 0 01-1.413.314 3.364 3.364 0 01-1.421-.314c-12.67-5.958-53.437-29.288-73.871-57.389-9.788-13.41-16.091-36.606-18.733-68.943-.941-11.511-1.416-24.285-1.413-37.967 0-11.17.31-20.8.61-28.753v-.1h.375a166.332 166.332 0 0019.285-1.132 160.879 160.879 0 0023.543-4.54 139.159 139.159 0 0051.572-26.163zm94.636 32.078h-.087a167.573 167.573 0 01-19.379-1.133 161.259 161.259 0 01-23.608-4.544 139.037 139.037 0 01-51.562-26.143A139.369 139.369 0 0176.77 42.114a161.087 161.087 0 01-23.573 4.545 166.532 166.532 0 01-19.308 1.133h-.183c-.3 7.93-.6 17.528-.606 28.65 0 13.677.472 26.446 1.412 37.951 2.64 32.3 8.93 55.462 18.7 68.842 20.41 28.067 61.136 51.374 73.794 57.325a3.166 3.166 0 001.337.3 3.107 3.107 0 001.328-.3c12.682-5.982 53.466-29.352 73.823-57.317 9.764-13.374 16.053-36.518 18.693-68.788.941-11.5 1.417-24.274 1.414-37.955-.006-11.158-.312-20.776-.612-28.72z"
        />
        <path
          data-name="Trazado 340"
          d="M156.169 81.703l-7.57-3.791-5.871-2.933-14.434-7.225v12.653l-15.666 6.259 15.666-6.259V67.754L100.407 81.7v9.854l-5.146 2.062v18.685l5.146.6v8.22l12.221-1.219v55.4l7.313 2.927v11.809l8.354 4.175v-88.515l-7.375 1.475V89.254l7.375-2.587v.007l7.363 2.58v17.911l-7.363-1.468v88.515l8.35-4.175v-11.809l13.846-5.493-.025-10.418-13.82 4.1v-11.81l13.846-2.752v-10.224l5.68-.511v-10.133h-12.209v-11.08l5.654.565 6.555.654v-9.854l5.154 1.031V93.618l-5.154-2.062zm3.275 13.188v15.119l-2.9-.581-2.25-.451v10.076l-4.5-.451-5.654-.564-2.066-.21v15.043h12.221v6.537l-3.968.345-1.709.151v10.4l-12.346 2.452-1.508.3v15.873l2.408-.716 11.412-3.393.033 6.627-12.666 5.024-1.187.466v11.931l-4.592 2.295v-83.189l5.113 1.031 2.25.444v-1.92l6.424 1.294V86.665l-7.316-2.933-5.049-2.018-1.422-.564V70.793l11.7 5.851 5.883 2.942 6.541 3.265v9.973l1.18.467z"
        />
        <path
          data-name="Trazado 340 - Contorno"
          d="M128.194 67.595l.1.05.1-.05v.1l14.378 7.195 5.871 2.933 7.625 3.819v9.848l5.154 2.062v18.875l-5.154-1.031v9.842l-12.209-1.219v10.87h12.209v10.325l-5.68.511v10.214l-.081.016-13.765 2.736v11.594l13.82-4.1v.134l.025 10.487-.063.025-13.783 5.468v11.8l-.055.028-8.294 4.148v.1l-.1-.05-.1.05v-.1l-8.354-4.175v-11.8l-7.312-2.927v-55.352l-12.221 1.219v-8.242l-5.146-.6V93.554l.063-.025 5.083-2.036v-9.848l.055-.028 27.832-13.919zm0 12.747V67.919l-27.687 13.846v9.86l-5.146 2.062v18.528l5.146.6v8.2l12.221-1.219v55.438l7.313 2.927v11.814l8.153 4.075v-88.231l-7.375 1.475v-18.11l.067-.023 7.508-2.634v.077l7.363 2.58v18.1l-.12-.024-7.244-1.444v88.238l8.149-4.075v-11.815l.063-.025 13.783-5.468-.025-10.217-13.821 4.1v-12.026l.081-.016 13.765-2.736v-10.233l5.68-.511v-9.942h-12.209v-11.291l12.209 1.219v-9.864l5.154 1.031v-18.5l-5.154-2.062v-9.86L148.553 78l-5.871-2.933-14.289-7.15v12.559l-.063.025-15.666 6.259-.074-.186zm7.363 8.984l-7.273-2.548-7.265 2.548v17.728l7.175-1.435v-.04l.1.02.1-.02v.04l7.163 1.428zm-5.484-18.685l.145.072 17.584 8.794 6.6 3.293v9.967l1.116.442 4.03 1.614v15.308l-5.146-1.031v10.062l-4.61-.462-5.654-.564-1.957-.2v14.833h12.221v6.729l-5.68.5v10.394l-13.854 2.752v15.657l13.819-4.108v.133l.033 6.7-.063.025-12.666 5.024-1.125.441v11.924l-.055.028-4.737 2.367v-83.473l5.233 1.055 2.13.421v-1.92l6.424 1.294V86.744l-7.253-2.908-5.049-2.018-1.485-.589zm24.125 12.282l-6.485-3.237-17.439-8.721v10.128l1.359.539 5.049 2.018 7.379 2.958v22.346l-6.424-1.294v1.919l-2.37-.468-4.994-1.007v82.905l4.392-2.2v-11.937l1.251-.491 12.6-5-.032-6.426-13.821 4.109v-16.08l1.588-.316 12.265-2.436v-10.413l5.68-.5v-6.346h-12.221v-15.254l2.177.222 10.044 1v-10.087l5.146 1.031V94.954l-3.9-1.564-1.243-.492z"
        />
      </g>
    </svg>
  );
};

export default IAMPoliciesIcon;
